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
function computerPlay() {
  let optionList = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return optionList[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie! Try again";
  }
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "Paper beats rock, You lose!";
    } else if (computerSelection == "scissors") {
      return "Rock beats scissors, You win!";
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "Scissors beats paper, You lose!";
    } else if (computerSelection == "rock") {
      return "Paper beats rock, You loose!";
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "Rock beats scissors, You lose!";
    } else if (computerSelection == "paper") {
      return "Scissors beats paper, You win!";
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    let myChoice = prompt("Do you choose rock, paper or scissors?");
    let computerChoice = computerPlay();
    console.log(playRound(myChoice, computerChoice));
  }
}

//var text = "Rock beats scissors, You win!";
//const myArray = text.split(",");
//var result = myArray[1];
//console.count(myChoice);
//console.count(computerChoice);

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log("You choose " + playerSelection);
//console.log("The computer's choice is " + computerSelection);
//console.log(playRound(playerSelection, computerSelection));
