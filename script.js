// Obtain the choice of the computer
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3); // computerChoice will be 0, 1, or 2

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerSelection = getComputerChoice();
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
const playerChoose = ["rock", "paper", "scissors"];

function setupEventListeners() {
    playerChoose.forEach(item => {
        const element = document.getElementById(item);
        element.addEventListener("click", () => playFullGame(item));
    });
}

function playFullGame(item) {
    playerSelection = item;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function game() {
    setupEventListeners();
}

game();

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    computerSelection = "";
    winner.textContent = "Winner";
    score.textContent = "Score";
});

const playerChoice = document.getElementById("player");
const computerChoice = document.getElementById("computer");
const winner = document.getElementById("winner");
const score = document.getElementById("score");

playerChoice.textContent = "Player";
computerChoice.textContent = "Computer";
winner.textContent = "Winner";

/* Create a function that plays one Round of Rock, Paper, Scissors */
function playRound(playerSelection, computerSelection) {
    const playerChoiceText = playerSelection.toUpperCase();
    const computerChoiceText = computerSelection.toUpperCase();

    // Computer Wins
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        ++computerScore;
        if (computerScore === 5) {
            winner.textContent = "Computer Wins The Game!";
        } else {
            winner.textContent = "Computer Wins Round";
        }

    // Player Wins
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        ++playerScore;
        if (playerScore === 5) {
            winner.textContent = "Player Wins The Game!";
        } else {
            winner.textContent = "Player Wins Round";
        }

    // Tie Game
    } else if (playerSelection === computerSelection) {
        winner.textContent = `Tie Game, both chose ${playerSelection}`;
    }

    playerChoice.textContent = playerChoiceText;
    computerChoice.textContent = computerChoiceText;
    score.textContent = `Player score is ${playerScore}. Computer score is ${computerScore}.`;
}
