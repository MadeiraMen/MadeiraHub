const content = [
    "Swinburne worker INFORMS Jacob that he shouldn’t go, LOSING them copious amounts of revenue."
    "Liam ASSAULTED on a bus by a 70/80-year-old man who HURLED himself at a HIGH VELOCITY towards Liam"
    "Harro and Lohm (lim) (Liam) MORTIFIED during Study Session as they OVERHEAR Sasha’s conversation: “She was SIXTEEN, Tarkin!” – highly incriminating evidence."
    "Madeira Men JUBILANT after the launch of the online Madeira Hub, hosting activities such as The Daily* Madeiral and Newsletters. Future growth is expected for https://madeiramen.github.io "
    "Nathan Hugo + Harro + Jeb are DEVASTATED as Aussies (cricket) THROW AWAY a SINCH win in England. Meanwhile, the Aussies (soccer) cause EUPHORIA within the ranks with a 4-0 OBLITERATION over Canada, PROGRESSING them into the knockout stage against Denmark"
    "Schoolwide FAILURE from the Maths Department (Methods) as cohort average was so low it had to be boosted."
    "Blake’s Broadly Bites on Brunch Bearing Big Brekkie Burger Meal (with Hashbrown and Birthday Cake flavoured latte) as he RACKS UP yet ANOTHER unresolved absence"
    "Mr Height SHOCKS pastoral care by announcing he is going to ATTEND a job interview, says it is for the role of PRINICPLE at Mullauna College: “we’re gonna be making some changes”¬ – Heighty regarding the shit college."
    "Mozz REVEALS that T Collo (Trent Collins) CONVINCED him to buy a pair of shoes."
    "GDP DOMINATES Geog class with a STAGGERING 96%, TOPPING the cohort."
    "Trebek (Blake) REFUSES to attend school due to his car getting TOTALLED, needing a REPAIR, and therefore REQUIRING him to catch the bus instead."
    "History REPEATS itself as physical print dies YET AGAIN, as writer/publisher of this newsletter ANNOUNCES the end of printed form."

];

const orderedList = document.createElement("ol");

content.forEach(itemText => {
    const listItem = document.createElement("li");
    
    listItem.textContent = itemText;
    orderedList.appendChild(listItem);
});

const listContainer = document.getElementById("list-container");
listContainer.appendChild(orderedList);
