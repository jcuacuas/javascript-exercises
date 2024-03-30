const rockPaperScissors = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let roundResults = "";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreCounter = document.querySelector("#player-score-counter");
const computerScoreCounter = document.querySelector("#computer-score-counter");
const div = document.createElement("p");
const div2 = document.createElement("p");
let gameResults = document.createElement("h1");



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

function getGameResults() {
  if (playerScore === 5) {
    gameResults.innerHTML = "You are the winner!!!";
    document.querySelector("#score-area").appendChild(gameResults);
  } else if (computerScore === 5) {
    gameResults.innerHTML = "You lost, try again.";
    document.querySelector("#score-area").appendChild(gameResults);
  }
}

/*
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
 */

function handler1() {
  playRound("rock", getComputerChoice());
  div.innerHTML = playerScore;
  playerScoreCounter.appendChild(div);
  div2.innerHTML = computerScore;
  computerScoreCounter.appendChild(div2);
  getGameResults();
}

function handler2() {
  playRound("paper", getComputerChoice());
  div.innerHTML = playerScore;
  playerScoreCounter.appendChild(div);
  div2.innerHTML = computerScore;
  computerScoreCounter.appendChild(div2);
  getGameResults();
}

function handler3() {
  playRound("scissors", getComputerChoice());
  div.innerHTML = playerScore;
  playerScoreCounter.appendChild(div);
  div2.innerHTML = computerScore;
  computerScoreCounter.appendChild(div2);
  getGameResults();
}


rock.addEventListener("click", handler1);
paper.addEventListener("click", handler2);
scissors.addEventListener("click", handler3);
