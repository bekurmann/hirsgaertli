---
title: ONLYOFFICE für Nextcloud
description: ONLYOFFICE ermöglicht dir, Office-Dateien direkt im Browser kollaborativ zu bearbeiten. Nach der Installation von Nextcloud, gehört die Installation von ONLYOFFICE zum Pflichtprogramm.
tags: ubuntu onlyoffice nextcloud docker installation 
author: Benjamin
category: howto
date: 2020-10-27
img: /blog/2020-10-27/onlyoffice.png
---

# ONLYOFFICE

ONLYOFFICE ermöglicht dir, Office-Dateien direkt im Browser kollaborativ zu bearbeiten. Nach der Installation von Nextcloud, gehört die Installation von ONLYOFFICE zum Pflichtprogramm.

Besuche auch deren Webseite [ONLYOFFICE](https://www.onlyoffice.com/), damit du einen Überblick über die Features erhälst. 

## Was du brauchst

Ich mag Ubuntu. Letztlich brauchst du einfach irgendeine Linux-Installation, auf der du Docker aufsetzen kannst. 
Ausserdem brauchst du eine Nextcloud-Installation und die ONLYOFFICE-App auf derselben. Und eine TLD, beispielsweise office.deinedomain.ch. 

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

## ONLYOFFICE im Docker Container

Mit folgendem Befehl startest du ONLYOFFICE in einem Docker container. Wichtig: erzeuge vorgängig ein sicheres Passwort und ersetze `your-secret-key`. Ausserdem musst du die IP-Adresse anpassen (`192.168.13.37`).

```bash
docker run -i -t -d -p 192.168.13.37:9981:80 -e JWT_ENABLED='true' -e JWT_SECRET='your-secret-key' --restart=always onlyoffice/documentserver
```

Kontrolliere, ob das geklappt hat:

```bash
docker ps
```

## Reverse Proxy

In einer [anderen Anleitung zeige ich die Installation des Nginx Proxy Managers](/blog/2020/11/02/nginx-proxy-manager/). Ich empfehle dir diese Installation. Nachher musst du einfach deine TLD office.deinedomain.ch auf den Port des Docker-Containers umleiten. Beachte bitte, dass du den Incoming-Traffic auf Port 9981 bei deiner Firewall erlauben musst. 

::: details Einstellungen für Nginx Proxy Manager 
* Details: Block common Exploits ✔, Websockets Support ✔, Port: 9981 (bzw. einfach dein Container Port)
* Custom Locations: /editors/, http, PorT: 9981
* SSL: HTTP/2 Support ✔
* Advanced:

```
proxy_set_header Upgrade $http_upgrade;
proxy_set_header X-Forwarded-Host $http_host/editors;
proxy_set_header Connection $forward_scheme://$server:$port;
```
:::

Teste dies, indem du mit einem Browser deine Domain aufrufst. Du solltest eine Webseite vorfinden, auf der steht: "Document Server is running".

## Einstellungen bei der ONLYOFFICE App auf deiner Nextcloud

Logge dich als Admin ein und bearbeite die Einstellungen unter ONLYOFFICE folgendermassen:

* Document Editing Service address: **https://** office.deinedomain.ch
* Secret key: dein selbst generiertes Passwort
* Advanced Server Settings:
  * Document Editing Service address for internal requests from the server: **https://** office.deinedomain.ch
  * Server address for internal requests from the Document Editing Service: **https://** cloud.deinedomain.ch (die Adresse deiner Nextcloud)
