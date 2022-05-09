import './style.css'

/*let myLeads = [];
const clickedIt = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
/!*
const byuEl = document.getElementById("buy");
*!/


clickedIt.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = "";
    renderLeads();

})

// Pridá do listItems html tagy s individuálnym objektom a následne ich pod for loopom vyrendruje
function renderLeads() {

    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
       // listItems += "<li>" + "<a target='_blank' href='"+ myLeads[i] +"'>" + myLeads[i]+ "</a>" + "</li>"; Horšie praktizovaná verzia kódu
        listItems +=
                            `<li class="underline text-yellow-300">
                                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
                            </li>`;

        /!*  const li = document.createElement("li");
          li.textContent = myLeads[i];
          ulEl.append(li);*!/
    }

    ulEl.innerHTML += listItems;
}*/


/*
let myLeads = [];
const clickedIt = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

clickedIt.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = "";
    renderLeads();
});

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li class="underline text-yellow-300">
                                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
                            </li>`;
    }

    ulEl.innerHTML = listItems;
}
*/

/*/!*Vytvorí novú array myLeads*!/
let myLeads = `["www.example.com"]`;

/!*
/!*Zmení array na string v JSONe *!/
myLeads = JSON.stringify(myLeads);

/!*Zmení string naspäť na array *!/
myLeads = JSON.parse(myLeads);

/!*Pridá do array novú hodnotu*!/
myLeads.push("www.epic.com");

/!*Vypíše do console hodnoty v myLeads array*!/
console.log(typeof myLeads);
*!/

myLeads = JSON.parse(myLeads);

myLeads.push("www.epic.com");

myLeads = JSON.stringify(myLeads);

console.log(typeof myLeads);*/

/*localStorage.setItem("myLeads", "www.example.com")
console.log(localStorage.getItem("myLeads"));
localStorage.clear();*/

let myLeads = [];
const clickedIt = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const delEl = document.getElementById("delete-btn");
const saveEl = document.getElementById("save-btn");

// ["lead1", "lead2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);  
}

/*const tabs = [
    {url: "https://www.linkedin.com/?trk=public_profile_nav-header-logo/"}
]*/

saveEl.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify( myLeads ));
        render(myLeads);
    });


})

delEl.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    document.location.reload(); // malo tu byť niečo iné ale keďže bola pozmenená funkcia renderLeads() a vykresluje každú hodnotu zvlášť tak ma nič iné nenapadlo len proste reštarovať celú stránku. 
})

clickedIt.addEventListener("click", () => {
    render(inputEl.value);

    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    console.log( localStorage.getItem("myLeads") ); // toto je len pre istotu, aby som vedel v akej forme sa mi to zobrazuje v localStorage.
    inputEl.value = "";

});

function render(val) {
    let liContainer = document.createElement("li");
    let aLink = document.createElement("a");

   /* liContainer.classList.add("underline");*/
    aLink.target = "_blank";
    aLink.href = val;
    aLink.innerHTML = val;

    liContainer.appendChild(aLink);
    ulEl.appendChild(liContainer);
}

function getFirst(arr) {
    return arr[0];
}

console.log( getFirst([1,2,3,4]) );

// function add(numberOne, numberTwo) {
//    return numberOne + numberTwo;
// }

// console.log(add(1, 4));

// const pEl = document.getElementById("p-el");

// function greetUser(greeting = "Welcome", name = "Peter") {
//     pEl.textContent = ` ${greeting},  ${name}  Wave`
// }

// greetUser("Hello", "Patrick");


// let trueOrFalse = Boolean("");
// console.log(trueOrFalse);

/*

const credits = 12;

if ("") {
    console.log("let's play");
}
else {
    console.log("You do not have enough credits");
}

//truthy = everything else other then in falsy
//falsy = false, 0, "", null, undefined, NaN
// null is used by developers to signalize emptiness
// undefined is used by JavaScript to signalize emptiness

let currentViewers = null;
currentViewers = ["Jane", "Nick"];

if (currentViewers) {
    console.log("we have viewers")
}
let currentViewers;
console.log(currentViewers);
*/

/*const recipient = "James";
const sender = "Thomas";
const email = `
               Hey ${recipient}!
               How is it going ?
               Cheers ${sender}.
               `;

console.log(email);*/


/*byuEl.innerHTML = "<button onclick='buy()'> Buy </button>"
/!*byuEl.addEventListener("click", function() {
    byuEl.innerHTML += "<p> Thank you for buying </p>"
})*!/
function buy() {
    byuEl.innerHTML += "<p>Thank you for buying!</p>"
}*/

/* Tu môže byť len jeden string pretože všetko čo sa nachádza vo vnútri sú len tagy a text, ale ak je to premenná tak tagy musia byť každý zvlášť oddelený uvodzovkami

const buyEL = document.getElementById("buy");
buyEL.innerHTML = "<button> Buy </button>"*/

/*let box = document.getElementById("box");

box.addEventListener("click", function() {
    console.log("I want to open the box!")
})*/


/*
let person = {
    name: "Thomas",
    age: 19,
    country: "Slovakia"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()*/


/*
let age = 67;

if (age < 6) {
    console.log("free");
}

else if (age < 18) {
        console.log("child discount")
}

else if (age < 27) {
    console.log("student discount")
}

else if (age < 67) {
    console.log("full price")
}

else {
    console.log("senior citizen discount")
}*/


/*
let largeContries = ["China", "India", "USA", "Indonesia", "Pakistan"];

console.log("The 5 largest countries in the world")
for (let i = 0; i < largeContries.length; i++) {
    console.log(largeContries[i])
}*/

/*
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan")
console.log(largeCountries)*/


/*
let dayOfMonth = 13;
let weekDay = "Friday";

if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("Spooky emoji")
}*/


/*
let hands = ["rock", "paper", "scissor"];

function randItem() {
    let randomIndex = Math.floor( Math.random() * 3 );
    console.log(hands[randomIndex]);
}

randItem()
randItem()
randItem()
*/

/*
let fruit = ["apple", "orange", "apple", "apple", "orange"];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function selectFruits() {

    for (let i = 0; i < fruit.length; i++) {
        console.log(fruit[i]);

        if (fruit[i] === "apple") {
            appleShelf.textContent += "apple "
        }

        else if (fruit[i] === "orange") {
            orangeShelf.textContent += "orange "
        }

    }

}

selectFruits();*/



