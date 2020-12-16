/* DOM Selectors */
const currentMoney = document.getElementById("currentMoney");
const guessLow = document.getElementById("guessLow");
const guessHigh = document.getElementById("guessHigh");
const result = document.getElementById("result");

/* Variable declarations */
let money = 200;
let randomNumber;

/* functions */

/* Creating a random number between 1-100 */

// function numberGenerator() {
//     let x = Math.floor(Math.random() * 100) + 1;
// }

function playGameLow() {
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if(x<=54){
        console.log("YOU WIN!");
    } else {
        console.log("YOU LOSE :(");
    }
}

function playGameHigh() {
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if(x>=55){
        console.log("YOU WIN!");
    } else {
        console.log("YOU LOSE :(");
    }
}

/* Main */
currentMoney.innerHTML = money;
/* I will need to create a function that runs 
when the player guesses something, this function will create the random
number and that random number will be the result
if the guess is right they win if not they lose */
