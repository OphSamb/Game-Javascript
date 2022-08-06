let userScore = 0;
let computerScore = 0;

const usersScore = document.getElementById("user-score");
const computersScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const resultSentence = document.querySelector(".result");
const rockMove = document.getElementById("rock");
const paperMove = document.getElementById("paper");
const scissorsMove = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertCase(userInput) {
  if (userInput === "paper") return "Paper";
  if (userInput === "scissors") return "Scissors";
  return "Rock";
}

function win(user, computer) {
  userScore++;
  usersScore.innerHTML = userScore;
  const userName = " (user)";
  const compName = " (computer)";
  resultSentence.innerHTML = `<p>${convertCase(user)} beats ${convertCase(computer)}</p><p> You win!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("winningStyles");
  setTimeout(() => roundStatus.classList.remove("winningStyles"), 300);
}

function loses(user, computer) {
  computerScore++;
  computersScore.innerHTML = computerScore;
  const userName = " (user)";
  const compName = " (computer)";
  resultSentence.innerHTML = `<p>${convertCase(user)} beats ${convertCase(computer)}</p><p> You lose!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("losingStyles");
  setTimeout(() => roundStatus.classList.remove("losingStyles"), 300);
}

function tie(user, computer) {
  const userName = "(user)";
  const compName = "(computer)";
  resultSentence.innerHTML = `<p> You both chose ${convertCase(user)}</p><p>Tie!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("tieStyles");
  setTimeout(() => roundStatus.classList.remove("tieStyles"), 300);
}

function playGame(userInput) {
  const computerChoice = getComputerChoice();
  const userChoice = userInput;
  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      loses(userChoice, computerChoice);
      break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockMove.addEventListener("click", () => playGame("rock"));
  paperMove.addEventListener("click", () => playGame("paper"));
  scissorsMove.addEventListener("click", () => playGame("scissors"));
}

main();
