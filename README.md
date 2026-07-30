# RSVP-Backend einrichten

So verbindet ihr das Formular auf der Website mit einem Google Sheet.

## 1. Sheet vorbereiten
1. Öffnet [sheets.google.com](https://sheets.google.com) und erstellt eine neue leere Tabelle
   (z. B. „Hochzeit RSVP").

## 2. Apps Script einfügen
1. In der Tabelle: **Erweiterungen → Apps Script**
2. Den kompletten Inhalt von `Code.gs` (aus diesem Ordner) in den Editor kopieren
   und die Vorlage dort ersetzen
3. Oben auf **Speichern** klicken (Diskettensymbol)

## 3. Als Web-App bereitstellen
1. Oben rechts auf **Bereitstellen → Neue Bereitstellung**
2. Typ auswählen: **Web-App**
3. Einstellungen:
   - Ausführen als: **Ich (eure E-Mail)**
   - Zugriff: **Jeder**
4. Auf **Bereitstellen** klicken
5. Google fragt nach Berechtigungen — bestätigen (bei „Nicht sichere App"-Warnung
   auf „Erweitert" → „Zur App (unsicher) wechseln", das ist normal bei eigenen Scripts)
6. Die angezeigte **Web-App-URL** kopieren, sie sieht so aus:
   `https://script.google.com/macros/s/ABC123.../exec`

## 4. URL in die Website einbauen
1. In `index.html` nach `YOUR_SCRIPT_ID_HERE` suchen
2. Die komplette Web-App-URL aus Schritt 3.6 dort einsetzen (im `action`-Attribut
   des `<form>`-Tags)

## 5. Testen
Formular auf der Website einmal testweise ausfüllen und abschicken. Danach in
der Google-Tabelle nachsehen — es sollte eine neue Zeile im Reiter „RSVP"
aufgetaucht sein.

## Wichtig bei Änderungen am Script
Falls ihr `Code.gs` später nochmal anpasst, müsst ihr eine **neue Version**
bereitstellen: Bereitstellen → Bereitstellungen verwalten → Stift-Symbol →
Version: Neue Version → Bereitstellen. Sonst greift die alte Version weiter.
