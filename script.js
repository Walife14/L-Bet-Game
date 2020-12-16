/* DOM Selectors */
const currentMoney = document.getElementById("currentMoney");
const guessLow = document.getElementById("guessLow");
const guessHigh = document.getElementById("guessHigh");

/* Variable declarations */
let money = 200;

/* Main */
currentMoney.innerHTML = money;

/* Creating a random number between 1-100 */

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

/* I will need to create a function that runs 
when the player guesses something, this function will create the random
number and that random number will be the result
if the guess is right they win if not they lose */
