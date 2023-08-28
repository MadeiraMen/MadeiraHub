const content = [
    "Yet ANOTHER teacher SACKED from Whitefriars as they COMPLIMENT Blake for his good looking balls: “nice ball, Blake” – Mr Payne on his last day of school.",
    "DB (downball) SHATTERED as Bigga Ball v3 goes into drain a STAGGERING 3 times during the ONE day",
    "Ollie chard CLAIMS he likes little fat boys: “I like little fat boys” – Ollie C",
    "Jordan Walton (J-Wiz) DISTRAUGHT as he learns he has to do a SAC at school: “its unfair. No, that’s so unfair” – J-Wiz learning that he has to do a SAC to complete Unit 4",
    "Lawrence and Dijkstra were CONVICTED of FRUAD after PILFERING Pinto and Keane’s Three Drink Theory: “We should have Copyrighted it” - GDP on the matter.",
    "VCAL cohort REDEEMS themselves as sausage sizzle is hosted, becoming FAVOURABLE in the public eye",
    `Andre Pauli STUNS downball members with INCREDIBLE debut, staying in king for a THOUSAND rounds *source needed`,
    "Oscar Sherlock ROASTS student teacher the SECOND he enters the class: “why do you look like a goober” – oscar sherlock uttering his debut funny joke",
    "BLEAK weekend for basketball as both Boomers and BKeane suffer CLOSE losses",
    "Jacob MORTIFIED as he sees DEAD echidna that was RUN OVER by another driver",
    "J-Dog the Falcon (Jacob Toland) declared DEAD at age 14 after not coming to school for WEEKS. Public celebrations ensue",
    "J-Dog the Combo (Jacob Kingston) breaks aviation RECORD as he somehow exceeds terminal velocity after LEAPING off T4.01 (he had to attend several Mr Cotter classes)",
    "Gavin APPROVES of Liam’s ILLICIT shoes worn to school: “those kicks are pretty fresh” – GDP regarding Liam’s foot fit",
    "Mozz (Mr Zerella) INFORMS class that he was SICK, ILL and SOMEWHAT UNWELL ON THE WEEKEND."
];

const orderedList = document.createElement("ol");

content.forEach(itemText => {
    const listItem = document.createElement("li");

    listItem.textContent = itemText;
    orderedList.appendChild(listItem);
});

const listContainer = document.getElementById("list-container");
listContainer.appendChild(orderedList);
