---
title: Installation von Nextcloud 20 unter Ubuntu 20.04
description: Installation von Nextcloud 20 unter Ubuntu 20.04 (inklusive Redis und Fail2Ban)
author: Benjamin
category: howto
tags: nextcloud ubuntu 20.04 redis fail2ban installation
date: 2020-10-27
img: /blog/2020-10-27/nextcloud.png
---

# Installation von Nextcloud 20 unter Ubuntu 20.04

## Vorbemerkungen

Nachfolgend zeige ich dir, wie du die Version 20 von [Nextcloud](https://nextcloud.com/) unter [Ubuntu 20.04](https://ubuntu.com/download/server) installieren kannst. Grundsätzlich empfehle ich dir, die Schritte in derselben Reihenfolge vorzunehmen, wie sie unten aufgeführt sind. 

::: tip
Bleib locker. Wenn mal etwas nicht klappt, ja nicht wild rum tippen. Chill. Überleg, was du als Letztes gemacht hast und identifiziere, was nicht geklappt hat. Schau auf den Bildschirm und lies die Ausgaben. Solltest du Hilfe brauchen, helfe ich dir - kontaktiere mich einfach. Kostenlos mache ich das aber nicht - ausser du bist völlig verzweifelt. Manchmal hilft Tee 🍵, Kaffee ☕ oder Bier 🍺. 
:::

::: tip
Alle Befehle werden als root User eingegeben. Ansonsten **sudo** vorne dran setzen.
:::

Was du brauchst? 
* Einen Ubuntu 20.04 (18.04 geht auch) Server
* Im Idealfall zwei Datenträger:
  * Einen wirst du haben - da ist Ubuntu drauf und da installieren wir gleich alles andere
  * Einen Datenträger für die Nextcloud-Daten (Benutzer Uploads); Mountpoint im Beispiel unten ist `/mnt/ssd/`
* Wenn du deinen Server übers Internet erreichbar machen willst, eine Domain (TLD)

## Inhalt

[[toc]]

## Vorbereitungen

### Zeitzone checken

Check mal, ob du bei deiner Ubuntu Installation die richtige Zeitzone eingestellt hast.

```bash
timedatectl
```

Sollte die ausgegebene Zeitzone nicht stimmen, ändere das:

```bash
dpkg-reconfigure tzdata
```


### Paketquellen

```bash
apt update && apt upgrade
```

## Installation LAMP-Stack

Nextcloud empfiehlt die Installation auf einem LAMP-Stack. Wir werden also Apache verwenden. Vielleicht mach ich später einmal eine Anleitung mit nginx. 

```bash
apt install lamp-server^
```

### Notwendige PHP Module

```bash
apt install php-zip php-dompdf php-xml php-mbstring php-gd php-curl php-imagick php-intl unzip php-bcmath php-gmp
```

### Anpassung php.ini

Nach der Installation, passen wir in der `/etc/php/7.x/apache2/php.ini` -Datei folgende Werte an:

```bash
memory_limit = 1024M
upload_max_filesize = 1024M
post_max_size = 1024M
date.timezone = Europe/Zurich
```
Das sind natürlich nur meine Vorschläge. Du kannst die Werte `upload_max_filesize` und `post_max_size` auch sehr viel höher ansetzen. Dateigrössen über 1GB mach ich nicht mit.  

## Mysql

### mysql_secure_installation

Bevor man mit mysql irgendwas produktives machen will:

```bash
mysql_secure_installation
```

Bitte entferne den anonymous Benutzer, verbiete remote root login und entferne die Testdatenbank. Privilegien darfst du neu laden. 

### Datenbank, Datenbankbenutzer und Berechtigungen

Jetzt rein in die schöne Welt von mysql:

```bash
mysql
```

Zuerst Datenbank erstellen:

```bash
CREATE DATABASE nextcloud;
```

Dann Datenbankbenutzer:

```bash
CREATE USER 'nextclouduser'@'localhost' IDENTIFIED BY 'passwort';
```
Ändere bitte das `passwort`.

Berechtigungen für eben erstellen Nutzer:

```bash
GRANT ALL ON nextcloud.* TO 'nextclouduser'@'localhost';
```
Speichern und Ciao!

```bash
FLUSH PRIVILEGES;
```
```bash
EXIT;
```


## Nextcloud

### Herunterladen und entpacken

```bash
cd /tmp && wget https://download.nextcloud.com/server/releases/latest.zip
```

Entpacken:

```bash
unzip latest.zip
```

Jetzt ins richtige Verzeichnis verschieben:

```bash
mv nextcloud /var/www/
```

### Apache2 config-Datei

```bash
nano /etc/apache2/sites-available/nextcloud.conf
```

Inhalt:

```bash
<VirtualHost *:80>
    ServerAdmin deine@email.ch
    DocumentRoot /var/www/nextcloud/
    ServerName nextcloud.local
    ServerAlias www.nextcloud.deinedomain.ch

    Alias /nextcloud "/var/www/nextcloud/"

    <Directory /var/www/nextcloud/>
    Options +FollowSymlinks
    AllowOverride All
    Require all granted
        <IfModule mod_dav.c>
        Dav off
        </IfModule>
    SetEnv HOME /var/www/nextcloud
    SetEnv HTTP_HOME /var/www/nextcloud
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
Passe bitte `ServerAdmin`, `ServerName` und `ServerAlias` entsprechend an.
Im lokalen Netzwerk kannst du `ServerName nextcloud.local` belassen, ansonsten dort deine TLD eintragen. 

### Apache2 Module und config

Wir aktivieren zuerst die eben erstellte config-Datei und anschliessend einige erforderliche Module. 

```bash
a2ensite nextcloud.conf
```

```bash
a2enmod rewrite
```

```bash
a2enmod headers
```

```bash
a2enmod env
```

```bash
a2enmod dir
```

```bash
a2enmod mime
```

Schön. Nun apache2 neustarten:

```bash
systemctl restart apache2
```

### Notwendige Berechtigungen für www-data

Nun müssen wir dem Benutzer www-data (Apache) die notwendigen Berechtigungen geben. 

Zuerst dem Datenverzeichnis (bitte passe das an; wenn du kein spezifisches Datenverzeichnis angelegt hast, befindet sich dein Datenverzeichnis später einfach im `nextcloud`-Verzeichnis. Davon rate ich dir ab. 

::: tip
Im Idealfall verfügst du über zwei Datenträger: Einer, auf dem du deinen LAMP-Stack am laufen hast und ein anderer, auf dem du die Daten deiner ablegst. Je nach Umgebung macht man dies unterschiedlich. Ich werde in einer anderen Anleitung darauf zurückkommen. Best practice wäre, wenn die Daten (also deine Dateien/Benutzer-Uploads) nicht im ` www/` Verzeichnis sind.
:::

Datenverzeichnis:

```bash
chown -R www-data:www-data /mnt/ssd/
```
```bash
chown -R www-data:www-data /mnt/ssd/
```

Nextcloud Hauptverzeichnis

```bash
chown -R www-data:www-data /var/www/nextcloud/ 
```

### Nextcloud Installation mit Web-Oberfläche abschliessen

Nun ist es soweit. Starte deinen Lieblingsbrowser und rufe die IP-Adresse deines Servers auf.
Auf der sich präsentierenden Seite, gibst du die vorgängig konfigurierten Angaben ein:
* Dein Daten-Verzeichnis (solltest du keinen zweiten Datenträger haben, einfach belassen)
* Datenbank: nextcloud
* Datenbankbenutzer: nextclouduser 
* Datenbankpasswort: von dir geändert
* Adresse 127.0.0.1 

Klick Installation abschliessen et voilà ... 

## Redis

### Installation

Nun ist es an der Zeit, [redis](https://redis.io/) zu installieren. 

```bash
apt install php-redis redis-server
```

### Konfiguration

In `/etc/redis/redis.conf` kommentieren wir folgende Einträge aus und/oder passen sie an:

```bash
port 0
unissocket /var/run/redis/redis.sock
unixsocketperm 770
```

Nun fügen wir den `redis` Nutzer unserer `www-data` Gruppe hinzu:

```bash
usermod -a -G redis www-data
```

### Nextcloud-Konfiguration für Redis anpassen:

Wir ergänzen (ganz unten) `/var/www/nextcloud/config/config.php` mit folgenden Werten:

```bash
'memcache.local' => 'OC\Memcache\Redis',
'memcache.locking' => '\OC\Memcache\Redis',
'filelocking.enabled' => 'true',
'redis' => 
array (
'host' => '/var/run/redis/redis.sock',
'port' => 0,
'timeout' => 0.0,
),
```

### Alles mal neustarten

Zuerst einmal apache2 neustarten:

```bash
service apache2 restart
```

Nun redis starten:

```bash
service redis-server start
```

Damit redis auch nach einem Neustart wieder für uns arbeitet:

```bash
systemctl enable redis-server
```

Wenn du dich nun mit deinem Admin-Benutzer an der Nextcloud anmeldest, wirst du die Fehlermeldung betreffend des fehlenden cachings bereinigt haben. Yeah! 🥳

## fail2ban für Nextcloud

Ich empfehle dir natürlich die Installation von [fail2ban](https://github.com/fail2ban/fail2ban) - nicht nur wegen nextcloud. Für Nextcloud erstellen wir aber zwei neue Dateien: Eine Konfigurations- und eine Jail-Datei. 

### Konfiguration

```bash
nano /etc/fail2ban/filter.d/nextcloud.conf
```

Ich hasse Regex (Danke an [Carsten Rieger](https://www.c-rieger.de/)). Inhalt:

```bash
[Definition]
_groupsre = (?:(?:,?\s*"\w+":(?:"[^"]+"|\w+))*)
failregex = ^\{%(_groupsre)s,?\s*"remoteAddr":"<HOST>"%(_groupsre)s,?\s*"message":"Login failed:
            ^\{%(_groupsre)s,?\s*"remoteAddr":"<HOST>"%(_groupsre)s,?\s*"message":"Trusted domain error.
datepattern = ,?\s*"time"\s*:\s*"%%Y-%%m-%%d[T ]%%H:%%M:%%S(%%z)?"
```

Danach noch die Jail-Datei:

```bash
nano /etc/fail2ban/jail.d/nextcloud.local
```

Mit folgendem Inhalt:

```bash
[nextcloud]
backend = auto
enabled = true
port = 80,443
protocol = tcp
filter = nextcloud
maxretry = 5
bantime = 3600
findtime = 36000
logpath = /var/www/nextcloud/data/nextcloud.log
```

::: tip Lesehilfe
Nach fünf fehlerhaften Anmeldeversuchen `maxretry` innerhalb von 36000 Sekunden (10h) `findtime` wird die IP-Adresse für 3600 Sekunden (1h) gesperrt `bantime`. 
:::

### Status

```bash
fail2ban-client status nextcloud
```

## SSL mit Certbot

Zum Lösen eines Let's Encrypt SSL-Zertifikates, benutzt du am besten [Certbot](https://certbot.eff.org/).

```bash
apt install python-certbot-apache
```

Weil du nicht der erste Mensch ist, der eine Apache Seite mittels SSL-Zertifikat von Cerbot absichern möchte, ist die [Integration in deinen Apache-Server](https://certbot.eff.org/docs/install.html) sehr einfach:

```bash
certbot --apache -m deine@email.ch -d deine.domain.ch
```

Weil dein neues Zertifikat nur 90 Tage gültig ist, richten wir noch einen cronjob ein, der dieses automatisch erneuert:

```bash
crontab -e
```

und ergänzen darin:

```bash
0 3 1 * * /usr/bin/certbot renew & > /dev/null
```

## Testen

Nachdem du alles gemacht hast, teste deine Installation:

https://www.ssllabs.com/ssltest/

https://observatory.mozilla.org/

https://scan.nextcloud.com/