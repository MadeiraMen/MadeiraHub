const content = [
    "HEARTBREAK as The Hurn (Shannon Hurn) announces his retirement, somehow causing the Eagles to become EVEN WORSE",
    "Toland is ordered to LEAVE the classroom after STINKING it out with a fart. Detective Crack believes this may be connected to the Kairos Stinker Incident, which claimed several lives last year.",
    "Accounting ASTROCITY as class FLUNKS yet another SAC with a STAGGERING 55% average. One student, who will go unnamed, received a WHOPPING 13%",
    "Newey ONCE AGAIN proves his IMMORALITY as he uses CHILDREN as examples of assets: “you would be depreciating in value” – possibly the last thing Kevy Dumb-Dumb said before he lost his teaching licence.",
    "Liam is STRANDED after bus DIDN’T arrive, FORCING him to walk to school during a BLIZZARD* (source needed)",
    "HUGE profit for Liam after purchasing ONE cheese and bacon toastie for the price of a regular cheese. He applauds Moule (Anthony M.) for his selfless humanitarian action.",
    `John’s joyless journey after julienned potato snack is DROPPED on the GROUND, causing WIDESPREAD PANIC.`,
    "HUGE allegation made on Dougy (Mr Douglas) and his questionable comments on sports: “I would rather be in the Matilda’s changing rooms”  - alleged quote from the now sketchy man (via Jordan Murtic)",
    "BROBDINGNANGIAN reveal during accounting class as The News (Newey (Kevin Nguyen) CONFESSES his vaping addiction: “I Just cannot stop” – The News, on his unbreakable bond with Raspberry Mint",
    "MASSIVE win for Aharro as he AQUIRES gold status in CSGO: “yeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaahhhhhhhhhhhh!!!!!!!!!!!” – Adam Harrison as he becomes SLIGHTLY less trash at the game.",
    "National DELECTATION as Matildas BUTTFUCK the Danish Duds in an UNEQUIVICAL 2-0 THRASHING in the Round of 16",
    `ANOTHER win for Adam Harrison as he guesses the DownBalle in one attempt (it was himself)`
];

const orderedList = document.createElement("ol");

content.forEach(itemText => {
    const listItem = document.createElement("li");

    listItem.textContent = itemText;
    orderedList.appendChild(listItem);
});

const listContainer = document.getElementById("list-container");
listContainer.appendChild(orderedList);
