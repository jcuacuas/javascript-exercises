const rockPaperScissors = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let roundResults = "";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return rockPaperScissors[getRandomInt(3)];
}

function playRound(player, computer) {
  let playerSelectionValue = rockPaperScissors.indexOf(player);
  let computerSelectionValue = rockPaperScissors.indexOf(computer);
  if (playerSelectionValue === computerSelectionValue) {
    return "a tie";
  } else if (playerSelectionValue === 0 && computerSelectionValue === 2) {
    playerScore += 1;
    return "you win";
  } else if (playerSelectionValue === 2 && computerSelectionValue === 0) {
    computerScore += 1;
    return "you lose";
  } else if (playerSelectionValue > computerSelectionValue) {
    playerScore += 1;
    return "you win";
  } else if (playerSelectionValue < computerSelectionValue) {
    computerScore += 1;
    return "you lose";
  }
}

function gameResults() {
  if (playerScore > computerScore) {
    return "you are the victor!!!";
  } else if (playerScore < computerScore) {
    return "you lost, try again!!!";
  } else {
    return "its a draw";
  }
}

function playGame() {
  playerSelection = prompt("Time to play!").toLowerCase().trim();
  computerSelection = getComputerChoice();
  roundResults = playRound(playerSelection, computerSelection);
  console.log("your choice: " + playerSelection);
  console.log("computer choice: " + computerSelection);
  console.log("your score: " + playerScore);
  console.log("opponent score: " + computerScore);
  return roundResults;
}


console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(gameResults());

