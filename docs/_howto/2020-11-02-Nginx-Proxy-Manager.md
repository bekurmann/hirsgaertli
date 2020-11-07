---
title: Nginx Proxy Manager installieren
description: Ein Reverse Proxy ist eine wunderbare Sache. Nicht nur, um die eigentlichen Server zu "verstecken", sondern auch zur zentralen Administration deiner Zertifikate oder zum besseren Schutz vor DDOS-Attacken. Hier zeige ich dir, wie du einen Reverse Proxy mit Hilfe des Nginx Proxy Managers installierst. 
metatags: ubuntu nginx proxy manager installation 
author: Benjamin
date: 2020-11-02
img: /blog/2020-11-02/nginx-proxy-manager.png
---

# Nginx Proxy Manager

Ein Reverse Proxy ist eine wunderbare Sache. Nicht nur, um die eigentlichen Server zu "verstecken", sondern auch zur zentralen Administration deiner Zertifikate oder zum besseren Schutz vor DDOS-Attacken. Hier zeige ich dir, wie du einen Reverse Proxy mit Hilfe des Nginx Proxy Managers installierst. 

[Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) ist ein wunderschönes Werkzeug. Dank einem ansprechenden GUI kannst du deinen Reverse Proxy bequem im Browser konfigurieren.

## Was du brauchst

Ich mag Ubuntu. Letztlich brauchst du einfach irgendeine Linux-Installation, auf der du Docker aufsetzen kannst. 

## Vorbereitungen

```bash
apt update && apt upgrade
```

Installation von docker:

```bash
apt install docker.io
```

Start und enable docker:

```bash
systemctl start docker
```

```bash
systemctl enable docker
```
Weiter brauchen wir docker-compose:

```bash
apt install curl
```

```bash
curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Berechtigung zum Ausführen:

```bash
chmod +x /usr/local/bin/docker-compose
```

## Nginx Proxy Manager Konfiguration

Zuerst erstellen wir ein Verzeichnis für unseren Proxy Manager.

```bash
mkdir proxymanager
```
Wechseln wir das Verzeichnis:

```bash
cd proxymanager/
```

Und darin erstellen wir eine json-Datei mit folgendem Inhalt:

```bash
nano config.json
```

Inhalt:

```bash
{
  "database": {
    "engine": "mysql",
    "host": "db",
    "name": "npm",
    "user": "npm",
    "password": "npm",
    "port": 3306
  }
}
```
Du kannst diese Einstellungen gerne so belassen. Wir werden Port 3306 nie gegenüber dem Internet öffnen. 
(Für alle Freunde von Webpack: npm steht hier für Nginx Proxy Manager 🤯)

Weiter gehts, immer noch im gleichen Verzeichnis `proxymanager/`, erstellen wir unsere YAML-Datei für docker-compose:

```bash
nano docker-compose.yml
```

Der Inhalt:

```bash
version: "3"
services:
  app:
    image: jc21/nginx-proxy-manager:latest
    restart: always
    ports:
      - 80:80
      - 81:81
      - 443:443
    volumes:
      - ./config.json:/app/config/production.json
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db
    environment:
    # if you want pretty colors in your docker logs:
    - FORCE_COLOR=1
  db:
    image: mariadb:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: "npm"
      MYSQL_DATABASE: "npm"
      MYSQL_USER: "npm"
      MYSQL_PASSWORD: "npm"
    volumes:
      - ./data/mysql:/var/lib/mysql
```

## 1, 2, 3, Container bauen lassen

Mit folgendem Befehl (immer noch im Verzeichnis `proxymanager`) bauen wir unsere Container:

```bash
docker-compose up -d (im verzeichnis!)
```

Zum überprüfen, ob alles geklappt hat:

```bash
docker ps
```

Wenn alles gut ist, siehst du zwei Container. Einmal mariadb:latest und einmal jc21/nginx-proxy-manager:latest.

## Weboberfläche

Nun kannst du dich erstmals auf der schönen Weboberfläche anmelden. Öffne hierzu deinen Browser und rufe [IP-Adresse]:81 auf.

Nach der Installation kannst du dich mit folgenden Standardwerten anmelden:

email: **admin@example.com** / pass: **changeme**

## PortForwarding

Logischerweise musst du Port 80 (HTTP) und Port 443 (HTTPS) zu der IP-Adresse deines Nginx Proxy Managers weiterleiten. 

## Troubleshooting

Solltest du beim esten Aufruf eine Fehlermeldung mit `Bad Gateway` erhalten, mach folgendes (wieder alles in `proxymanager/`):

```bash
docker-compose down
```

```bash
kill - 9 $(lsof -t -i:9001)
```

```bash
docker-compose up -d
```

::: tip Richtig cool
SSL-Zertifikate löst und aktualiserit Nginx Proxy Manager automatisch. 
Ausserdem hast du die Möglichkeit mittels Access Lists den Zugriff weiter einzuschränken. 
:::

## gängige Konfigurationen

### Nextcloud

* Details: Block common Exploits ✔, Port: 80
* SSL: Force SSL ✔, HSTS Enabled ✔, HTTP/2 Support ✔
* Advanced: 

```
location = /.well-known/carddav {
    return 301 $scheme://$host:$server_port/remote.php/dav;
}
location = /.well-known/caldav {
    return 301 $scheme://$host:$server_port/remote.php/dav;
}
```

### ONLYOFFICE für Nextcloud

* Details: Block common Exploits ✔, Websockets Support ✔, Port: 9981 (bzw. einfach dein Container Port)
* Custom Locations: /editors/, http, PorT: 9981
* SSL: HTTP/2 Support ✔
* Advanced:

```
proxy_set_header Upgrade $http_upgrade;
proxy_set_header X-Forwarded-Host $http_host/editors;
proxy_set_header Connection $forward_scheme://$server:$port;
```