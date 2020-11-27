---
title: &title 5 Dinge, die du nach der Ubuntu Server Installation tun solltest
description: &desc Nach der erfolgreichen Installation von Ubuntu Server, empfehle ich dir die folgenden fünf Konfigurationen vorzunehmen. 
metatags: &metatags ubuntu hardening ssh fail2ban firewall ufw security banner
author: Benjamin
date: 2020-11-13
img: &img https://hirsgaertli.ch/blog/2020-11-13/hardening.png
meta: 
  - name: keywords
    content: *metatags
  - property: og:title
    content: *title
  - property: og:image
    content: *img
  - property: og:description
    content: *desc
  - property: twitter:title
    content: *title
  - property: twitter:image
    content: *img
  - property: twitter:description
    content: *desc
---

# 5 Dinge, die du nach der Ubuntu Server Installation tun solltest

Grundsätzlich ist eine neue Ubuntu Server Installation nicht per se unsicher. Dennoch gibt es einige Dinge, die du nach der Installation unbedingt konfigurieren sollst - insbesondere dann, wenn der Server übers Internet erreichbar sein soll.

## Neuer Benutzer

Deine Installation verfügt derzeit lediglich über einen root Benutzer (LXC). Wenn du Ubuntu Server auf einer VM installiert hast, hast du während des Installationsvorganges einen weiteren, eigenen Benutzer angelegt. Wenn in einem LXC, lege zuerst einen weiteren Benutzer an:

```bash 
adduser paul
```

### Berechtigungen für neuen Benutzer

Der eben erstelle Benutzer, den wir in Zukunft verwenden möchten, verfügt noch über keine administrativen Berechtigungen. Das ändern wir:

```bash
usermod -aG sudo paul
```

Nun können wir mittels `sudo` administrative Befehle ausführen.

## SSH

Selbstverständlich empfehle ich dir, deinen Server mittels SSH zu verwalten. SSH kommt ebenfalls standardmässig mit Ubuntu. Solltest du noch über keinen SSH-Key verfügen, generiere diesen (auf deiner lokalen Maschine!):

```bash
ssh-keygen -t rsa -b 2048
```

Von deiner lokalen Maschine (nicht auf dem Server) kannst du den eben erstellen SSH-Key nun mittels `ssh-copy-id` auf deinen Server kopieren:

```bash
ssh-copy-id paul@remote_IP
```

Der Benutzername `paul` ist hierbei der Benutzer auf deinem Server. Die IP-Adresse selbstverständlich die Adresse deines Servers.

Nach dem erfolgreichen kopieren deines SSH-Keys kannst du die Möglichkeit der Password Authentifizierung sperren. 

Dazu änderst du auf dem Server deine SSH-Konfiguration:

```bash
nano /etc/ssh/sshd_config
```

Unkommentiere und ändere den Eintrag:

```bash
PasswordAuthentication no
```

Starte SSH neu:

```bash
systemctl restart ssh
```

## UFW 

Dein Server braucht eine Firewall. Am einfachsten geht das mit UFW. UFW ist bereits auf deinem Ubuntu Server installiert. UFW kennt vorgefertigte Konfigurationen für spezifsiche Applikationen, die wir uns anzeigen lassen können: 

```bash
ufw app list
```

Um den SSH Zugriff sicherzustellen (wir wollen uns nach dem Einschalten der Firewall nicht selbst aussperren), erlauben wir den SSH Zugriff:

```bash
ufw allow OpenSSH
```

Den Status und die geblockten/erlaubten Zugänge können wir uns nun anzeigen lassen:

```bash
ufw status
```

Um UFW zu aktivieren (auch nach Neustart):

```bash
ufw enable
```

## Fail2Ban

[Fail2Ban](https://www.fail2ban.org) "scans log files (e.g. /var/log/apache/error_log) and bans IPs that show the malicious signs -- too many password failures, seeking for exploits, etc.". Damit du deinen Server mit fail2ban schützen kannst, mache Folgendes:

```bash
apt install fail2ban
```

Für den oben konfigurierten SSH-Zugriff, editere folgende Datei:

```bash
nano /etc/fail2ban/jail.local
```

Und füge die Konfiguration für SSH (Standardport) ein:

```bash
[sshd]
enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```

Fail2Ban neu starten...

```bash
systemctl restart fail2ban
```

## Security Banner

Immer, wenn du dich neu an deinem Server einloggst, erscheint ein sogenannter Security-Banner. Immer wieder wird empfohlen, diesen Banner anzupassen. Im Idealfall sollte der Security-Banner auf Verantwortlichkeiten und Gefahren hinweisen. Ich für meinen Teil freue mich einfach, wenn er mich zum Schmunzeln bringt.

Damit du den Banner änder kannst:

```bash
nano /etc/issue.net
```

Füge folgenden Inhalt ein (Beispiel):

```bash
                            . .  ,  ,
                            |` \/ \/ \,',
                            ;          ` \/\,.
                           :               ` \,/
                           |                  /
                           ;                 :
                          :                  ;
                          |      ,---.      /
                         :     ,'     `,-._ \
                         ;    (   o    \   `'
                       _:      .      ,'  o ;
                      /,.`      `.__,'`-.__,
                      \_  _               \
                     ,'  / `,          `.,'
               ___,'`-._ \_/ `,._        ;
            __;_,'      `-.`-'./ `--.____)
         ,-'           _,--\^-'
       ,:_____      ,-'     \
      (,'     `--.  \;-._    ;
      :    Y      `-/    `,  :
      :    :       :     /_;'
      :    :       |    :
       \    \      :    :
        `-._ `-.__, \    `.
           \   \  `. \     `.
         ,-;    \---)_\ ,','/
         \_ `---'--'" ,'^-;'
         (_`     ---'" ,-')
         / `--.__,. ,-'    \
        )-.__,-- ||___,--' `-.
        /._______,|__________,'\
        `--.____,'|_________,-
```

Öffne anschliessend folgende Datei:

```bash
nano /etc/ssh/sshd_config
```

Und ergänze unseren Banner, indem du folgende Zeil unkommentierst bzw. ergänzst:

```bash
Banner /etc/issue.net
```

Wenn du die Standard-Benachrichtigungen nicht willst, öffnest du:

```bash
nano /etc/pam.d/sshd
```

Und kommentierst folgende Zeilen aus:

```bash
session optional pam_motd.so motd=/run/motd.dynamic
session optional pam_motd.so noupdate
```

Starte sshd neu:

```bash
systemctl restart sshd
```

## Unattended Upgrades

Ich habe bereits [einen Artikel über unattended-upgrades geschrieben](https://hirsgaertli.ch/howto/2020/10/28/unattended-upgrades-ubuntu/). Meiner Meinung nach ebenfalls etwas, dass du konfigurieren solltest. 

Cheers! 🍺