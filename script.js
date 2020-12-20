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
const buyMachine = document.getElementById("buyMachine");

/* Variable declarations */
let money = 200;
let randomNumber;
let betValue = 0;
currentMoney.innerHTML = money;

/* onclick functions */

buyMachine.onclick = function() {
    if(money<20){
        alert("You don't have enough money!");
        return;
    }
    money-=20;
    currentMoney.innerHTML = money;
    let timerId = setInterval(() => machineOne(), 5000);
    addSlotMachine();
}

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

resetGame.onclick = resetTheGame;

/* functions */

function playGameLow() {
    if (betValue == 0) {
        isWinner.innerHTML = "Please Select a bet amount!";
        isWinner.classList.add("loser");
        return;
    }
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if (x <= 54) {
        youWin();
    } else {
        youLose();
    }
}

function playGameHigh() {
    if (betValue == 0) {
        isWinner.innerHTML = "Please Select a bet amount!";
        isWinner.classList.add("loser");
        return;
    }
    let x = Math.floor(Math.random() * 100) + 1;
    result.innerHTML = x;
    if (x >= 55) {
        youWin();
    } else {
        youLose();
    }
}

function resetTheGame() {
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

function lostGame() {
    if (money <= 0) {
        alert("You've Lost! The game will now reset!");
        resetTheGame();
    }
}

function youWin() {
    isWinner.innerHTML = "YOU WIN! :)";
    result.classList.remove("loser");
    result.classList.add("winner");
    isWinner.classList.remove("loser");
    isWinner.classList.add("winner");
    money += betValue;
    currentMoney.innerHTML = money;
}

function youLose() {
    isWinner.innerHTML = "YOU LOSE! :(";
    result.classList.remove("winner");
    result.classList.add("loser");
    isWinner.classList.remove("winner");
    isWinner.classList.add("loser");
    money -= betValue;
    currentMoney.innerHTML = money;
    lostGame();
}

/* Slot Machine codes */

function machineOne() {
    money+=1;
    currentMoney.innerHTML = money;
}

function addSlotMachine() {
    let slotMachine = document.createElement("p");
    let node = document.createTextNode("▣");
    slotMachine.appendChild(node);
    let element = document.getElementById("slotMachines");
    element.appendChild(slotMachine);
}