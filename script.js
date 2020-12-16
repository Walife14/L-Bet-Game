/* DOM Selectors */
const currentMoney = document.getElementById("currentMoney");
const guessLow = document.getElementById("guessLow");
const guessHigh = document.getElementById("guessHigh");
const result = document.getElementById("result");
const isWinner = document.getElementById("isWinner");
const bet10 = document.getElementById("bet10");
const bet25 = document.getElementById("bet25");
const betDisplay = document.getElementById("betDisplay");
const resetGame = document.getElementById("resetGame");

/* Variable declarations */
let money = 200;
let randomNumber;
let betValue = 0;
console.log(betValue);

/* onclick functions */

bet10.onclick = function () {
    betValue = 10;
    betDisplay.innerHTML = betValue;
    if (betValue = 10) {
        bet25.classList.remove("betSelected");
        bet10.classList.add("betSelected");
    }
    return betValue;
}

bet25.onclick = function () {
    betValue = 25;
    betDisplay.innerHTML = betValue;
    if (betValue = 25) {
        bet10.classList.remove("betSelected");
        bet25.classList.add("betSelected");
    }
    return betValue;
}

resetGame.onclick = function () {
    money = 200;
    betDisplay.innerHTML = 00;
    currentMoney.innerHTML = money;
    bet10.classList.remove("betSelected");
    bet25.classList.remove("betSelected");
    isWinner.classList.remove("loser");
    isWinner.classList.remove("winner");
    result.classList.remove("loser");
    result.classList.remove("winner");
    isWinner.innerHTML = "Will You Win?";
    result.innerHTML = "--";
}

/* functions */

/* Creating a random number between 1-100 */

// function numberGenerator() {
//     let x = Math.floor(Math.random() * 100) + 1;
// }

function playGameLow() {
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if (x <= 54) {
        isWinner.innerHTML = "YOU WIN! :)";
        result.classList.remove("loser");
        result.classList.add("winner");
        isWinner.classList.remove("loser");
        isWinner.classList.add("winner");
        money += betValue;
        currentMoney.innerHTML = money;
    } else {
        isWinner.innerHTML = "YOU LOSE! :(";
        result.classList.remove("winner");
        result.classList.add("loser");
        isWinner.classList.remove("winner");
        isWinner.classList.add("loser");
        money -= betValue;
        currentMoney.innerHTML = money;
    }
}

function playGameHigh() {
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if (x >= 55) {
        isWinner.innerHTML = "YOU WIN! :)";
        result.classList.remove("loser");
        result.classList.add("winner");
        isWinner.classList.remove("loser");
        isWinner.classList.add("winner");
        money += betValue;
        currentMoney.innerHTML = money;
    } else {
        isWinner.innerHTML = "YOU LOSE! :(";
        result.classList.remove("winner");
        result.classList.add("loser");
        isWinner.classList.remove("winner");
        isWinner.classList.add("loser");
        money -= betValue;
        currentMoney.innerHTML = money;
    }
}

/* Main */
currentMoney.innerHTML = money;
/* I will need to create a function that runs
when the player guesses something, this function will create the random
number and that random number will be the result
if the guess is right they win if not they lose */
