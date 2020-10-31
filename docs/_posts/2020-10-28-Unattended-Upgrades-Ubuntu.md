---
title: Unattended Upgrades in Ubuntu 20.04 konfigurieren
description: So richtest du automatische Updates unter Ubuntu 20.04 ein. Damit dein Server stets auf dem neusten Stand ist. 
author: Benjamin
category: howto
tags: ubuntu unattended upgrades 
date: 2020-10-28
img: /blog/2020-10-28/unattended-upgrades.png
---

# Unattended Upgrades in Ubuntu 20.04 konfigurieren

::: tip 
Ob du das wirklich willst, musst du selbst entscheiden. Gewisse Leute wollen nicht, dass ihre Server-Installation ohne ihre Beaufsichtigung Updates durchführen. Tu was du nicht lassen kannst - nachfolgend zeige ich dir jedenfalls, wie es gehen würde. 
:::

## Installation

Wie immer starten wir, indem wir unsere Paketquellen aktualisieren. 

```bash
apt update
```

```bash
apt install unattended-upgrades update-notifier-common
```

## Konfiguration

Standardmässig ist `unattended-upgrades` so konfiguriert, dass nur security-updates installiert werden. Ich empfehle dir, dies so zu belassen.

Dennoch passen wir die Datei `/etc/apt/apt.conf.d/50unattended-upgrades` ein wenig an (unkommentieren & ändern):

```bash
Unattended-Upgrade::MailReport "only-on-error";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "03:00";
```

Mail gibt's laso nur bei Fehlern, `apt autoremove` wird nach Installation ausgeführt, Server wird automatisch neu gestartet und das ganze passiert jeweils um 03:00 Uhr morgens. 

## Enabling

In `/etc/apt/apt.conf.d/20auto-upgrades` müssen folgende Werte drin sein:

```bash
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
```

## Testen

Damit wir sicher sein können, dass das ganze auch funktioniert, testen wir:

```bash
unattended-upgrades --dry-run --debug
```







