const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Invalid input");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer wins";
    } else {
      return "You win";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins";
    } else {
      return "You win";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins";
    } else {
      return "You win";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(`You choose ${userChoice}`);
  console.log(`The computer choose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
