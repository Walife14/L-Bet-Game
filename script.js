/* DOM Selectors */
const currentMoney = document.getElementById("currentMoney");
const guessLow = document.getElementById("guessLow");
const guessHigh = document.getElementById("guessHigh");
const result = document.getElementById("result");
const isWinner = document.getElementById("isWinner");
const bet10 = document.getElementById("bet10");
const bet25 = document.getElementById("bet25");


/* Variable declarations */
let money = 200;
let randomNumber;
let betValue = 0;
console.log(betValue);

/* functions */

/* Creating a random number between 1-100 */

// function numberGenerator() {
//     let x = Math.floor(Math.random() * 100) + 1;
// }

bet10.onclick = function(){
    betValue = 10;
    console.log(betValue);
    return betValue;
}

bet25.onclick = function(){
    betValue = 25;
    console.log(betValue);
    return betValue;
}

function playGameLow() {
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if(x<=54){
        isWinner.innerHTML = "YOU WIN! :)";
        result.classList.remove("loser");
        result.classList.add("winner");
        isWinner.classList.remove("loser");
        isWinner.classList.add("winner");
        console.log(betValue);
    } else {
        isWinner.innerHTML = "YOU LOSE! :(";
        result.classList.remove("winner");
        result.classList.add("loser");
        isWinner.classList.remove("winner");
        isWinner.classList.add("loser");
    }
}

function playGameHigh() {
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if(x>=55){
        isWinner.innerHTML = "YOU WIN! :)";
        result.classList.remove("loser");
        result.classList.add("winner");
        isWinner.classList.remove("loser");
        isWinner.classList.add("winner");
    } else {
        isWinner.innerHTML = "YOU LOSE! :(";
        result.classList.remove("winner");
        result.classList.add("loser");
        isWinner.classList.remove("winner");
        isWinner.classList.add("loser");
    }
}

/* Main */
currentMoney.innerHTML = money;
/* I will need to create a function that runs 
when the player guesses something, this function will create the random
number and that random number will be the result
if the guess is right they win if not they lose */
