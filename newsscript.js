const content = [
    "1.	The Tillies (Matildas) (Australian Women’s Soccer [football] Team) THRASH Denmark to YET AGAIN progress further in the World Cup (FIFA) Liam SUES Coles for forcing him to work during the shootout *source needed",
    "Harro IMMESSURABLY angry at Lim for MISSING 3 quarters of SCINTILATING football, only being PRESENT for the last quarter with BK (Blake) (Keane) *source needed. Lysterfield Wolves players INVESTIGATED for ILLICIT use of PERFORMANCE-ENHANCNING supplements *source needed.",
    "Gavin Pinto has A WORD OR TWO about an issue, and would LIKE to publicly share them: “I strongly support the side of the argument which my contention resides on” – Gavin Pinto on said issue",
    "Mr Lafferty CRACKS IT at year 9’s and a few year 11’s (although the 11’s were fairly innocent) after kid was allegedly bullied on the chartered bus: “people who use the word snitch are COWARDS”  Mr Lafferty in his very deserved spray of the year 9’s.",
    "Minh FUMBLES the Tetris Tournament, being ELIMINATED in the Prelims: “Tetris tournament, who ever thought of playing Tetris in a tournament? – Mr High",
    "The Mr Hynes CRACKDOWN of 2023 as year eight class is given PERMANENT seating arrangement in F1:10",
    `Study center DEFACED by poster-postering VANDALS with the wicked aim of replacing the whole wall`,
    "Mr Wood FURIOUS as Liam does his maths in Mr Ward’s classroom instead, leaving Blake STRANDED back in S1.04",
    "HUGE reveal as one of the year 8’s in Mr Hynes class was the PERUPTUATPER of Bus Incident (see entry 4) – name is Felix Petroulias ",
    "Blake COMMENTS on the weather: “it’s quite warm today”¬ – Blake Keane on the apparent air temperature",
    "Gavin UNIMPRESSED with BKeane’s lateness to class: “I am unimpressed” – GDP on Firemm waking up at 8:59am",
    `Several members of the newsletter MILDLY IRRITATED as newsletter is NOT published on its scheduled friday`
];

const orderedList = document.createElement("ol");

content.forEach(itemText => {
    const listItem = document.createElement("li");

    listItem.textContent = itemText;
    orderedList.appendChild(listItem);
});

const listContainer = document.getElementById("list-container");
listContainer.appendChild(orderedList);
