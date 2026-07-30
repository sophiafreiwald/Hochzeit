/**
 * RSVP-Backend für Sophia & Lukas
 * Schreibt jede Formular-Antwort als neue Zeile in dieses Sheet.
 */

const SHEET_NAME = "RSVP Hochzeit";

function doPost(e) {
  const sheet = getOrCreateSheet();
  sheet.appendRow([
    new Date(),
    e.parameter.name || "",
    e.parameter.attending || "",
    e.parameter.guests || "",
    e.parameter.diet || "",
    e.parameter.message || ""
  ]);
  return ContentService.createTextOutput("OK");
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Zeitstempel", "Name", "Teilnahme", "Anzahl Personen", "Allergien/Essenswünsche", "Nachricht"]);
  }
  return sheet;
}
