/*//Write a JavaScript program to find the diagonal of a square where the length of each side is 9.//
function findDiagonal(a) {
  return Math.sqrt(2) * a;
}
var side = 9;
console.log(findDiagonal(side));

//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.//
function findArea(side1, side2, side3) {
  var semiPeri = (side1 + side2 + side3) / 2;
  return Math.sqrt(semiPeri * ((semiPeri - side1) * (semiPeri - side2) * (semiPeri - side3)));
}

var side1 = 5;
var side2 = 6;
var side3 = 7;

console.log(findArea(side1, side2, side3));

//Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.//
function findCircumference(radius) {
  return 2 * Math.PI * radius;
}
function calculateArea(radius) {
  return Math.PI * (radius * radius);
}
console.log(findCircumference(4), calculateArea(4));

//Write a JavaScript program that accepts two integers and displays the larger of the two.//
function findLargerNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "They are equal";
  }
}
console.log(findLargerNumber(7, 7));

//Write a JavaScript program that checks whether an integer is an even or an odd number//
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(9));*/

//Main JavaScript Project//
const computerSelection = computerPlay();

function computerPlay() {
  let optionList = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return optionList[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie! Try again";
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose!";
  } else {
    return "You win!";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose!";
  } else {
    return "You win!";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose!";
  } else {
    return "You win!";
  }
  console.log("You choose " + playerSelection);
  console.log("The computer's choice is " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}
//function game() {
//  for (let i = 0; i < 5; i++) {
//    let myChoice = prompt("Do you choose rock, paper or scissors?");
//    console.log(myChoice);
//    let computerChoice = computerPlay();
//    console.log(computerChoice);
//    console.log(playRound(myChoice, computerChoice));
//  }
//}
