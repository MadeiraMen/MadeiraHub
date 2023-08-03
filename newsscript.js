const content = [
    "Munchtime Men BAMBOOZLED by bin that was found on top of a roof",
    "Mozz suspects he was FIRED WITHOUT WARNING as his brand new key-card STOPS working",
    "Laf Dog UNIMPRESSED with N. Hugo finding the bin funny, gives him an INSTANT Saturday detention (source needed.)",
    "Spencer Hurley BEFFUDDLED as he witnesses Liam getting stuck at East Richmond Station at 3:30am",
    "Jacob LAUNCHES music career with 4 singles going STRAIGHT to the top OF THE CHARTS (he also immediately announced his retirement as he doesn't have the sorts of riches that Zalek does)",
    "GDP (Gavin Pinto) comes in CLUTCH as Mozz and Liam STRUGGLE to finish a level of Spot the Difference Daily, DISCOVERING the last difference which was an ABSOLUTE CURLER",
    `Adam DECAPITATES Lysterfield Wolves player in ABHORRENT display of sportsmanship: "same old Blackburn players, always cheating" - expected response from average Lysterfield Wolves supporter.`,
    "Liam WAGS day of school",
    "Liam WAGS day of school",
    "Liam WAGS day of school",
    "Liam WAGS day of school",
    `Production on 'The Famous 2023 Donvale Media Studio Hostage Situation' GRINDS to a halt, project gets CANNED after one day of shooting (and 3 terms of planning)`,
    "Schoolwide DEPRESSION hits as players CANNOT use the Bigga-Ball.4",
    "Matildas FUMBLE THE BAG after CONCEDING 3 straight goals against Nigeria, finally answering the question that yes, Kerr DID carry the team",
    "INCREDIBLE, INSPIRING, IMPRESSIVE, INTRUGING, and INTERESTING story unfolds on school campus, but DOES NOT make the newsletter as Liam WASN'T THERE to see it",
    "also, the Madeira Hub opened"
];

const orderedList = document.createElement("ol");

content.forEach(itemText => {
    const listItem = document.createElement("li");

    listItem.textContent = itemText;
    orderedList.appendChild(listItem);
});

const listContainer = document.getElementById("list-container");
listContainer.appendChild(orderedList);
