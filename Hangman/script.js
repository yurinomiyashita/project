//initial reference
const letterContainer=document.getElementById("letter-container");
const optionsContainer=document.getElementById("options-container");
const userInputSection=document.getElementById("user-input-section");
const newGameContainer=document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas=document.getElementById("canvas");
const resultText = document.getElementById("result-text");
 

//options value for buttons 
let options = {
    fruitas: [
        "apple",
        "blueberry",
        "mandarin", 
        "pineapple",
        "Pomegranate",
        "watermelon",
        "lilikoi",
    ], 
    animals: [
        "hedgehog",
        "Zabra",
        "Squirrel",
        "Panther",
        "fish", 
        "walrus",
    ],
    countries: [
        "India",
        "Hungary", 
        "Japan",
        "Mexico",
        "Zimbabwe",
        "Switzerland"
    ],
};


//count
let winCount = 0;
let count = 0;
let chosenWord =  "";

//display option buttons 
const displayOptions = () => {
    optionsContainer.innerHTML +=`<h3> Please Select An Options</3>`;
    let buttonCon = document.createElement("div");
    for (let value in options){
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')"> ${value}
        </button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

//Word Generator 
const generateWord= (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //if option value matches the button intter text then highluhgt the button
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() ===
        optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });
};

//initial function (called when page loads/ user presses new game)
const initializer = () => {
    winCount = 0; 
    count = 0;

    //for creating letter buttons
    for(let i = 65; 1 < 91; i++){
        let button = document.createElement("button");
        button.classList.add("letters");
        //number to ASCII [a-z]
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
    }

    displayOptions();

};

//New Game
newGameButton.addEventListener("click",initializer);
window.onload = initializer;


