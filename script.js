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
