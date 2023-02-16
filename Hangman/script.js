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

//black all the buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    //dsiable all options
    optionsButtons.forEach((button)=> {
        button.disabled = true; 
    });
    //disable all letters
    letterButtons.forEach(button => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};
//Word Generator 
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //if option value matches the button intter text then highluhgt the button
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() ===
        optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });

    //initially hide letters, clear previous word 
    letterContainer.classList.remove("hide");
    userInputSection.innerText = ""; 

    let optionArray = options[optionValue];
    //choose reandom word 
    chosenWord = optionArray[Math.floor(math.random () * optionArray.length)];
    chosenWord= chosenWord.toUpperCase();
    console.log(chosenWord);

    //replace every letter iwth span container dash
    let dispalyItem = chosenWord.replace(/./g,'<span class="dashes">_</span>');
    
    //display each element as span 
    userInputSection.innerHTML = displayItem; 
};



//initial function (called when page loads/ user presses new game)
const initializer = () => {
    winCount = 0; 
    count = 0;

    //initially erase all content and hide letters and new game button 
    userInputSection.innerHTML = " ";
    optionsContainer.innerHTML = " ";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML= "";



    //for creating letter buttons
    for(let i = 65; 1 < 91; i++){
        let button = document.createElement("button");
        button.classList.add("letters");
        //number to ASCII [a-z]
        button.innerText = String.fromCharCode(i);
        //character button click 
        button.addEventListener("click",() =>{
            let charArray= chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            //if array contains click value replace the matched dash with letter else dram on canvas 
            if(charArray.includes(button.innerText)){
                charArray.forEach((char,index) => {
                    //if character in array is same as clicked button 
                    if(char === button.innerText){
                        //replace dash with letter
                        dashes[index].innerText = char;
                        //increment counter 
                        winCount += 1;
                        //if win count equals word length
                        if (winCount == charArray.length) {
                            resultText.innerHTMl = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;
                            //block all buttons 
                            blocker(); 
                        }
                        
                    }
                });
             } else{
                    //lose count 
                    count += 1; 
                    //for drawing man 
                    drawMan(count);
                    //count == 6 becahse head body, arm,arm, leg, leg
                }
            }
        });
        letterContainer.append(button);
    }

    displayOptions();
};

//New Game
newGameButton.addEventListener("click",initializer);
window.onload = initializer;


