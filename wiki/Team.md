# Allgemein 
# Informationen / Dokumentation
* In das **TEAM-WIKI** kommen alle Informationen, die zur Organisation des Teams gehören. Informationen zu den Produkten und HowTos kommen ins **EMI-WIKI**
* Produktportfolio landen im EMI-WIKI.
* HowTos zu Produkten stehen im EMI-WIKI.

# Termine
Welche Termine und Modis wollen wir halten.
* Alle Termine im ScrumModus gibt es als **Teams** Einladung. Bei einer Einladung darauf achten.
* Da wir aber in EMIP im **ScrumModus** allgemein arbeiten, wir wir den zweiwöchigen Takt mit leben.
* Wir werden jede Wochen ein **Refinement** veranstalten.  
* Der **Sprintwechsel** wird mit einem **Review**/**Retroperspektive** am Freitag beendet und am Mittwoch mit der **Aufplanung**/ **SprintStart** gestartet. Start jeweils 9:00 a.m. 
* Wir halten mit Ausnahem zum Sprintwechsel Freitag / Montag ein **Daily**. Wenn es nicht geht, kurz per Email an Alle. 

# Ablageorte
* TeamSharelaufwerk: [AppFramework Sharpoint](https://teamshare.zeiss.com/content/90000244/3FM%20Dokumente/Forms/AllItems.aspx?RootFolder=%2Fcontent%2F90000244%2F3FM%20Dokumente%2FP%2E60%2E5%2E31%20SW%20Automatisierung%5FLogAnalysis&FolderCTID=0x012000ED2CB4E4C350164C8DCE7D544F370ACC&View=%7BEECBEA0A%2DA002%2D4285%2D88DC%2D496D5498BD56%7D)
* [ProjektWIKI](https://wiki.zeiss.com/display/LITMI/Team+3FM+KIBANA)

# Sprint Refinement
* Im Refinement wird zusammen, ScrumTeam + PO, PBIs erzeugt ggf vorhandene bewertet und in Approve gesetzt.

# Sprint Retroperspektive
* Nutzen der Retroperspektive Funktion im AzureDevOps Bordes.
* Rückblick; Was ist wie gelaufen +/-
* Was kann wie verbessert werden

# Sprint Planing
* PO oder ScrumMaster legen Sprint an
* Aus dem Backlog werden Approved PBIs in Sprint geladen.
* ScrumTeam ermittelt ihre Kapazität für jeden Sprint; Urlaub, Verfügbarkeit
* Approved PBS im Sprint werden geprüft und ggf zurückgenommen. 
* Alle verbleibenden PBIs werden auf Commited gesetzt.

# Product Backlog (PB)
Wie werden wir vornehmlich PBIs ermitteln.
* Epics und Features wird durch den PO vorgegeben.
* Epics und Features können ggf. in Absprache mit dem PO aus dem Team erstellt werden. Status New wird durch Ersteller und PO auf Approved gesetzt.
* Epics und Features vom Team müssen Beschrieben werden. Ansonsten gibt es kein Approved.
* Epics und Features ggf. UserStory enthalten Stakholder. Diese müssen bei Abschluss abgeholt werden. 
* In Refinement werden wir daraus PBIs ermitteln, ggf. auch die StoryPoints. Die DoR ist zu erzielen.
* Im Sprintwechsel werden wir nach Prio aus dem Quartalssprint PBIs in das zukünftige Sprint übernehmen. PBIs müssen aber DoR sein.
* PBIs (Userstory) wird auf Done durchs Team gesetzt.
* PBIs (Userstory) wird auf Closed durch PO gesetzt.
* PBIs (Epic/Features) in einem QuartalsSprint müssen durch das Team Refined werden.
 
# Definition of Done (DoD)
Folgende Kriterien müssen erfüllt sein, damit ein Product Backlog Item (PBI) in einem Sprint als erfüllt (done) gekennzeichnet werden kann:

* PBI Akzeptanzien die nicht über Unittest beschrieben werden können müssen durch Manuelle Test / Test Plans ergänzt werden.
* Wenn ProgrammCode geschrieben wird müssen alle öffentlichen Schnittstellen im Code Dokumentiert sein. Verboten sind generierten oder leere Dokumentationen - Ausgenommen ist das inheritdoc-Tag.

# Definition of Ready (DoR)
Damit ein Product Backlog Item (PBI) in einen Sprint eingeplant werden kann, müssen folgende Kriterien erfüllt sein:

* Betroffene Applikation ist benannt
(im Epic oder Feature und in PBI ggf. weitere Informationen)
* Ansprechpartner/Stakeholder sind benannt
(im Epic oder Feature und in PBI ggf. weitere Informationen)
* Anforderungen und Erwartungen sind beschrieben
* Abhängigkeiten sind geprüft und benannt
(bezogen auf Zuarbeit von "außen" oder von anderen PBIs)
* Akzeptanzkriterien sind aufgezählt
