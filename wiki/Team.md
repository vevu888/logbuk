# General 
# Information / Documentation
* In the **TEAM-WIKI** go all information that belongs to the organization of the team. Information about the products and HowTos go into the **EMI-WIKI**.
* Product portfolios end up in the EMI-WIKI.
* HowTos about products end up in the EMI-WIKI.

# Dates
*Which dates and modes do we want to keep.
* All dates in ScrumMode are available as **Teams** invitation. When you get an invitation, pay attention to this.
* But since we work in EMIP in **ScrumModus** in general, we live with the two-week cycle.
* We will have a **refinement** every weeks.  
* The **SprintChange** will end with a **Review**/**Retroperspective** on Friday and start on Wednesday with the **Schedule**/ **SprintStart**. Start 9:00 a.m. each day. 
* We keep a **Daily** with exception to the sprint change Friday / Monday. If it doesn't work, briefly email All. 

# Storage locations
* TeamSharelaufwerk: [AppFramework Sharpoint](https://teamshare.zeiss.com/content/90000244/3FM%20Dokumente/Forms/AllItems.aspx?RootFolder=%2Fcontent%2F90000244%2F3FM%20Dokumente%2FP%2E60%2E5%2E31%20SW%20Automatisierung%5FLogAnalysis&FolderCTID=0x012000ED2CB4E4C350164C8DCE7D544F370ACC&View=%7BEECBEA0A%2DA002%2D4285%2D88DC%2D496D5498BD56%7D)
* [TeamWIKI](https://wiki.zeiss.com/display/LITMI/Team+3FM+KIBANA)

# Sprint Refinement
* In Refinement, together, ScrumTeam + PO, PBIs are created if necessary existing ones are evaluated and put in Approve.
* Sprint Image: ![sprint7.png](/.attachments/sprint7-8bbaed13-afb1-43a4-9684-3928ffc9821d.png)
# Sprint Retroperspective.
* Use of Retroperspective feature in AzureDevOps Bordes.
* Retrospective; What went how +/-.
* What can be improved and how

# Sprint Planning
* PO or ScrumMaster create Sprint.
* Approved PBIs are loaded into Sprint from the backlog.
* ScrumTeam determines their capacity for each sprint; vacation, availability.
* Approved PBIs in Sprint are checked and withdrawn if necessary. 
* All remaining PBIs are set to Committed.

# Product Backlog (PB).
How will we primarily identify PBIs.
* Epics and features will be specified by the PO.
* Epics and Features can be created from the team in consultation with the PO if necessary. Status New will be set to Approved by creator and PO.
* Epics and features from the team must be described. Otherwise there is no Approved.
* Epics and Features possibly UserStory contain Stakholder. These must be picked up at completion. 
* In Refinement we will determine PBIs, if necessary also the StoryPoints. The DoR is to be achieved.
* In Sprint Change, we will transfer PBIs from the Quarterly Sprint to the future Sprint according to Prio. However, PBIs must be DoR.
* PBIs (Userstory) will be set to Done by the team.
* PBIs (Userstory) will be set to Closed by PO.
* PBIs (Epic/Features) in a Quarterly Sprint must be Refined by the Team.
 
# Definition of Done (DoD).
The following criteria must be met for a Product Backlog Item (PBI) to be marked as done in a Sprint:

* PBI acceptances that cannot be described via Unittest must be completed by Manual Test / Test Plans.
* When writing code, all public interfaces must be documented in the code. Prohibited are generated or empty documentation - except the inheritdoc tag.

# Definition of Ready (DoR)
For a Product Backlog Item (PBI) to be scheduled into a Sprint, the following criteria must be met:

* Affected application is named
(in Epic or Feature and in PBI further information if necessary).
* Contact person/stakeholder is named
(in Epic or Feature and in PBI further information if necessary)
* Requirements and expectations are described
* Dependencies are checked and named
(related to input from "outside" or from other PBIs).
* Acceptance criteria are listed
