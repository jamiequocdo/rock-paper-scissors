//Obtains the choice of the computer
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) /*computerChoice will be 0, 1, or 2*/

    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerSelection = getComputerChoice();
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let playerChoose = ["rock", "paper", "scissors"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    computerSelection = "";
    winner.textContent = "Winner";
    score.textContent = "Score";
})



const playerChoice = document.getElementById("player")
const computerChoice = document.getElementById("computer");
const winner = document.getElementById("winner");
const score = document.getElementById("score");

playerChoice.textContent = "Player";
computerChoice.textContent = "Computer";
winner.textContent = "Winner";

/*Create a function that plays one Round of Rock, Paper, Scissors*/
function playRound (playerSelection, computerSelection) {

    /*Computer Wins*/
    
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            playerChoice.textContent = `${playerSelection.toUpperCase()}`;
            computerChoice.textContent = `${computerSelection.toUpperCase()}`;
            computerScore++;
            score.textContent = `Player score is ${playerScore}. Computer score is ${computerScore}.`
            if (computerScore === 3) {
                winner.textContent = "Computer Wins The Game!";
            } else {
                winner.textContent = "Computer Wins Round";
            }

    /*Player Wins*/
    } else if ( (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "rock" && computerSelection === "scissors")) {
                playerChoice.textContent = `${playerSelection.toUpperCase()}`;
                computerChoice.textContent = `${computerSelection.toUpperCase()}`;
                playerScore++;
                score.textContent = `Player score is ${playerScore}. Computer score is ${computerScore}.`
                if (playerScore === 3) {
                    winner.textContent = "Player Wins The Game!";
                } else {
                    winner.textContent = "Player Wins Round";
                }
                         
    /*Tie Game*/
    } else if ( (playerSelection === "rock" && computerSelection === "rock") ||
                (playerSelection === "paper" && computerSelection === "paper") ||
                (playerSelection === "scissors" && computerSelection === "scissors")) {
                    playerChoice.textContent = `${playerSelection.toUpperCase()}`;
                    computerChoice.textContent = `${computerSelection.toUpperCase()}`;
                    winner.textContent = `Tie Game, both chose ${playerSelection}`;
                    score.textContent = `Player score is ${playerScore}. Computer score is ${computerScore}.`
    }
}

