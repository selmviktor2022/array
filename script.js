
const myExperiences = [ "LTW - Software Developer",
                    "Dorner Electronic - Sales Engineer",
                    "TIP - Customer Support",  
                    ];
const listEl = document.querySelector("#exp-list");

let newJob = "??? - Frontend Developer";
myExperiences.push(newJob);


console.log("Array: ");
let itemsToList = "";
for(let i of myExperiences) {
    itemsToList += ` <li id = listItems > ${i} </li> `;
    console.log(i);
}
listEl.innerHTML += itemsToList;





