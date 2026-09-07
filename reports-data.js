/* ============================================================
   EK19 RACE REPORTS — DATA FILE
   ============================================================

   HOW TO ADD A REPORT
   -------------------
   1. Put the weekend's photos in  media/reports/
   2. Copy the example object below, paste it INSIDE the [ ] brackets,
      remove the // at the start of each line, and fill in your details.
   3. Save. The report appears on reports.html automatically and the
      newest one shows on the homepage. Newest goes at the TOP of the list.

   While the list is empty, the site shows "Coming soon". You do not need
   to touch any other file.

   Every field is optional except date + circuit. Leave a field as "" (empty
   quotes) or delete the line if you do not have it yet. Photos are optional
   too — a section with no photo just shows the text.
   ============================================================ */

window.RACE_REPORTS = [

  /* ============================================================
     SAMPLE ENTRY — DEMO ONLY
     ------------------------------------------------------------
     This is a filled-in example so you can see what a finished
     report looks like. The words, positions and lap times below
     are placeholders, NOT real results. Emil: replace every value
     with your own after the round, then it's a real report.
     To start fresh, just delete this whole { ... } block.
     ============================================================ */
  {
    date: "6 Apr 2026",
    circuit: "Donington Park National",
    series: "750MC Formula Vee",
    car: "No.19",

    hero: "media/gallery/2026-donington-grid.jpg",
    heroCaption: "SAMPLE REPORT. Replace the text and photos with your own. Donington Park, April 2026.",

    stats: {
      quali: "P4",
      race1: "P3",
      race2: "P2",
      bestLap: "1:12.4",
      laps: "24"
    },

    qualifying: "Cool, dry conditions to open the season. The car came alive on the second set of laps once temperature was in the tyres, and P4 on the grid put us right in the fight. Half a tenth off the second row, plenty to work with heading into the races.",

    race1: "A clean launch held the line into Redgate and we settled into a three-car train for the lead group. Spent the middle stint learning where the leaders were quick, then made the move stick at the Melbourne hairpin with four to go. P3 and the podium to open the year.",
    race1Photo: "media/gallery/2026-donington-lead.jpg",

    race2: "Reverse-grid draw put us fifth on the road. Worked forward early, picked off two cars through the Craner Curves, and closed onto the back of the leader in the closing laps. Ran out of time to make it stick but P2 caps a strong opening weekend.",
    race2Photo: "media/gallery/2026-donington-chase.jpg"
  },

  /* ---------- BLANK TEMPLATE (copy this, uncomment, and edit) ----------
  {
    date: "6 Apr 2026",                       // race weekend date
    circuit: "Donington Park",                // track name
    series: "750MC Formula Vee",              // championship / series
    car: "No.19",                             // car / number

    hero: "media/reports/donington-2026-hero.jpg",   // main photo (on track or on the grid)
    heroCaption: "On the grid at Donington. Photo: Jane Smith",  // caption + credit

    stats: {
      quali: "P4",        // qualifying position
      race1: "P3",        // race 1 finish
      race2: "P2",        // race 2 finish
      bestLap: "1:12.4",  // best lap time
      laps: "24"          // laps completed
    },

    qualifying: "How qualifying went — conditions, lap times, what worked or didn't, grid position heading into the races.",

    race1: "Race 1 — the start, early laps, any battles or incidents, strategy, and how the result unfolded.",
    race1Photo: "media/reports/donington-2026-race1.jpg",

    race2: "Race 2 — same idea. How it played out from lights to flag.",
    race2Photo: "media/reports/donington-2026-race2.jpg"
  },
  ------------------------------------------------------------- */

];
