# Copyright © 2004-01-11 luhui.net all rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Main toolbar buttons (tooltips and alt text for images)
previous.title=Eine Seite zurück
previous_label=Zurück
next.title=Eine Seite vor
next_label=Vor

# LOCALIZATION NOTE (page.title): The tooltip for the pageNumber input.
page.title=Seite
# LOCALIZATION NOTE (of_pages): "{{pagesCount}}" will be replaced by a number
# representing the total number of pages in the document.
of_pages=von {{pagesCount}}
# LOCALIZATION NOTE (page_of_pages): "{{pageNumber}}" and "{{pagesCount}}"
# will be replaced by a number representing the currently visible page,
# respectively a number representing the total number of pages in the document.
page_of_pages=({{pageNumber}} von {{pagesCount}})

zoom_out.title=Verkleinern
zoom_out_label=Verkleinern
zoom_in.title=Vergrößern
zoom_in_label=Vergrößern
zoom.title=Zoom
presentation_mode.title=In Präsentationsmodus wechseln
presentation_mode_label=Präsentationsmodus
open_file.title=Datei öffnen
open_file_label=Öffnen
print.title=Drucken
print_label=Drucken
download.title=Dokument speichern
download_label=Speichern
bookmark.title=Aktuelle Ansicht (zum Kopieren oder Öffnen in einem neuen Fenster)
bookmark_label=Aktuelle Ansicht

# Secondary toolbar and context menu
tools.title=Werkzeuge
tools_label=Werkzeuge
first_page.title=Erste Seite anzeigen
first_page.label=Erste Seite anzeigen
first_page_label=Erste Seite anzeigen
last_page.title=Letzte Seite anzeigen
last_page.label=Letzte Seite anzeigen
last_page_label=Letzte Seite anzeigen
page_rotate_cw.title=Im Uhrzeigersinn drehen
page_rotate_cw.label=Im Uhrzeigersinn drehen
page_rotate_cw_label=Im Uhrzeigersinn drehen
page_rotate_ccw.title=Gegen Uhrzeigersinn drehen
page_rotate_ccw.label=Gegen Uhrzeigersinn drehen
page_rotate_ccw_label=Gegen Uhrzeigersinn drehen

cursor_text_select_tool.title=Textauswahl-Werkzeug aktivieren
cursor_text_select_tool_label=Textauswahl-Werkzeug
cursor_hand_tool.title=Hand-Werkzeug aktivieren
cursor_hand_tool_label=Hand-Werkzeug

scroll_vertical.title=Seiten übereinander anordnen
scroll_vertical_label=Vertikale Seitenanordnung
scroll_horizontal.title=Seiten nebeneinander anordnen
scroll_horizontal_label=Horizontale Seitenanordnung
scroll_wrapped.title=Seiten neben- und übereinander anordnen, anhängig vom Platz
scroll_wrapped_label=Kombinierte Seitenanordnung

spread_none.title=Seiten nicht nebeneinander anzeigen
spread_none_label=Einzelne Seiten
spread_odd.title=Jeweils eine ungerade und eine gerade Seite nebeneinander anzeigen
spread_odd_label=Ungerade + gerade Seite
spread_even.title=Jeweils eine gerade und eine ungerade Seite nebeneinander anzeigen
spread_even_label=Gerade + ungerade Seite

# Document properties dialog box
document_properties.title=Dokumenteigenschaften
document_properties_label=Dokumenteigenschaften…
document_properties_file_name=Dateiname:
document_properties_file_size=Dateigröße:
# LOCALIZATION NOTE (document_properties_kb): "{{size_kb}}" and "{{size_b}}"
# will be replaced by the PDF file size in kilobytes, respectively in bytes.
document_properties_kb={{size_kb}} KB ({{size_b}} Bytes)
# LOCALIZATION NOTE (document_properties_mb): "{{size_mb}}" and "{{size_b}}"
# will be replaced by the PDF file size in megabytes, respectively in bytes.
document_properties_mb={{size_mb}} MB ({{size_b}} Bytes)
document_properties_title=Titel:
document_properties_author=Autor:
document_properties_subject=Thema:
document_properties_keywords=Stichwörter:
document_properties_creation_date=Erstelldatum:
document_properties_modification_date=Bearbeitungsdatum:
# LOCALIZATION NOTE (document_properties_date_string): "{{date}}" and "{{time}}"
# will be replaced by the creation/modification date, and time, of the PDF file.
document_properties_date_string={{date}} {{time}}
document_properties_creator=Anwendung:
document_properties_producer=PDF erstellt mit:
document_properties_version=PDF-Version:
document_properties_page_count=Seitenzahl:
document_properties_page_size=Seitengröße:
document_properties_page_size_unit_inches=Zoll
document_properties_page_size_unit_millimeters=mm
document_properties_page_size_orientation_portrait=Hochformat
document_properties_page_size_orientation_landscape=Querformat
document_properties_page_size_name_a3=A3
document_properties_page_size_name_a4=A4
document_properties_page_size_name_letter=Letter
document_properties_page_size_name_legal=Legal
# LOCALIZATION NOTE (document_properties_page_size_dimension_string):
# "{{width}}", "{{height}}", {{unit}}, and {{orientation}} will be replaced by
# the size, respectively their unit of measurement and orientation, of the (current) page.
document_properties_page_size_dimension_string={{width}} × {{height}} {{unit}} ({{orientation}})
# LOCALIZATION NOTE (document_properties_page_size_dimension_name_string):
# "{{width}}", "{{height}}", {{unit}}, {{name}}, and {{orientation}} will be replaced by
# the size, respectively their unit of measurement, name, and orientation, of the (current) page.
document_properties_page_size_dimension_name_string={{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})
# LOCALIZATION NOTE (document_properties_linearized): The linearization status of
# the document; usually called "Fast Web View" in English locales of Adobe software.
document_properties_linearized=Schnelle Webanzeige:
document_properties_linearized_yes=Ja
document_properties_linearized_no=Nein
document_properties_close=Schließen

print_progress_message=Dokument wird für Drucken vorbereitet…
# LOCALIZATION NOTE (print_progress_percent): "{{progress}}" will be replaced by
# a numerical per cent value.
print_progress_percent={{progress}}%
print_progress_close=Abbrechen

# Tooltips and alt text for side panel toolbar buttons
# (the _label strings are alt text for the buttons, the .title strings are
# tooltips)
toggle_sidebar.title=Sidebar umschalten
toggle_sidebar_notification.title=Sidebar umschalten (Dokument enthält Dokumentstruktur/Anhänge)
toggle_sidebar_label=Sidebar umschalten
document_outline.title=Dokumentstruktur anzeigen (Doppelklicken, um alle Einträge aus- bzw. einzuklappen)
document_outline_label=Dokumentstruktur
attachments.title=Anhänge anzeigen
attachments_label=Anhänge
thumbs.title=Miniaturansichten anzeigen
thumbs_label=Miniaturansichten
findbar.title=Dokument durchsuchen
findbar_label=Suchen

# Thumbnails panel item (tooltip and alt text for images)
# LOCALIZATION NOTE (thumb_page_title): "{{page}}" will be replaced by the page
# number.
thumb_page_title=Seite {{page}}
# LOCALIZATION NOTE (thumb_page_canvas): "{{page}}" will be replaced by the page
# number.
thumb_page_canvas=Miniaturansicht von Seite {{page}}

# Find panel button title and messages
find_input.title=Suchen
find_input.placeholder=Im Dokument suchen…
find_previous.title=Vorheriges Vorkommen des Suchbegriffs finden
find_previous_label=Zurück
find_next.title=Nächstes Vorkommen des Suchbegriffs finden
find_next_label=Weiter
find_highlight=Alle hervorheben
find_match_case_label=Groß-/Kleinschreibung beachten
find_entire_word_label=Ganze Wörter
find_reached_top=Anfang des Dokuments erreicht, fahre am Ende fort
find_reached_bottom=Ende des Dokuments erreicht, fahre am Anfang fort
# LOCALIZATION NOTE (find_match_count): The supported plural forms are
# [one|two|few|many|other], with [other] as the default value.
# "{{current}}" and "{{total}}" will be replaced by a number representing the
# index of the currently active find result, respectively a number representing
# the total number of matches in the document.
find_match_count={[ plural(total) ]}
find_match_count[one]={{current}} von {{total}} Übereinstimmung
find_match_count[two]={{current}} von {{total}} Übereinstimmungen
find_match_count[few]={{current}} von {{total}} Übereinstimmungen
find_match_count[many]={{current}} von {{total}} Übereinstimmungen
find_match_count[other]={{current}} von {{total}} Übereinstimmungen
# LOCALIZATION NOTE (find_match_count_limit): The supported plural forms are
# [zero|one|two|few|many|other], with [other] as the default value.
# "{{limit}}" will be replaced by a numerical value.
find_match_count_limit={[ plural(limit) ]}
find_match_count_limit[zero]=Mehr als {{limit}} Übereinstimmungen
find_match_count_limit[one]=Mehr als {{limit}} Übereinstimmung
find_match_count_limit[two]=Mehr als {{limit}} Übereinstimmungen
find_match_count_limit[few]=Mehr als {{limit}} Übereinstimmungen
find_match_count_limit[many]=Mehr als {{limit}} Übereinstimmungen
find_match_count_limit[other]=Mehr als {{limit}} Übereinstimmungen
find_not_found=Suchbegriff nicht gefunden

# Error panel labels
error_more_info=Mehr Informationen
error_less_info=Weniger Informationen
error_close=Schließen
# LOCALIZATION NOTE (error_version_info): "{{version}}" and "{{build}}" will be
# replaced by the PDF.JS version and build ID.
error_version_info=PDF.js Version {{version}} (build: {{build}})
# LOCALIZATION NOTE (error_message): "{{message}}" will be replaced by an
# english string describing the error.
error_message=Nachricht: {{message}}
# LOCALIZATION NOTE (error_stack): "{{stack}}" will be replaced with a stack
# trace.
error_stack=Aufrufliste: {{stack}}
# LOCALIZATION NOTE (error_file): "{{file}}" will be replaced with a filename
error_file=Datei: {{file}}
# LOCALIZATION NOTE (error_line): "{{line}}" will be replaced with a line number
error_line=Zeile: {{line}}
rendering_error=Beim Darstellen der Seite trat ein Fehler auf.

# Predefined zoom values
page_scale_width=Seitenbreite
page_scale_fit=Seitengröße
page_scale_auto=Automatischer Zoom
page_scale_actual=Originalgröße
# LOCALIZATION NOTE (page_scale_percent): "{{scale}}" will be replaced by a
# numerical scale value.
page_scale_percent={{scale}}%

# Loading indicator messages
loading_error_indicator=Fehler
loading_error=Beim Laden der PDF-Datei trat ein Fehler auf.
invalid_file_error=Ungültige oder beschädigte PDF-Datei
missing_file_error=Fehlende PDF-Datei
unexpected_response_error=Unerwartete Antwort des Servers

# LOCALIZATION NOTE (annotation_date_string): "{{date}}" and "{{time}}" will be
# replaced by the modification date, and time, of the annotation.
annotation_date_string={{date}}, {{time}}

# LOCALIZATION NOTE (text_annotation_type.alt): This is used as a tooltip.
# "{{type}}" will be replaced with an annotation type from a list defined in
# the PDF spec (32000-1:2008 Table 169 – Annotation types).
# Some common types are e.g.: "Check", "Text", "Comment", "Note"
text_annotation_type.alt=[Anlage: {{type}}]
password_label=Geben Sie zum Öffnen der PDF-Datei deren Passwort ein.
password_invalid=Falsches Passwort. Bitte versuchen Sie es erneut.
password_ok=OK
password_cancel=Abbrechen

printing_not_supported=Warnung: Die Drucken-Funktion wird durch diesen Browser nicht vollständig unterstützt.
printing_not_ready=Warnung: Die PDF-Datei ist nicht vollständig geladen, dies ist für das Drucken aber empfohlen.
web_fonts_disabled=Web-Schriftarten sind deaktiviert: Eingebettete PDF-Schriftarten konnten nicht geladen werden.
document_colors_not_allowed=PDF-Dokumenten ist es nicht erlaubt, ihre eigenen Farben zu verwenden: 'Seiten das Verwenden von eigenen Farben erlauben' ist im Browser deaktiviert.
