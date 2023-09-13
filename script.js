//Obtains the choice of the computer
//Need to have the game only go up to 3 wins.  Then after that, create a button to restart the game
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let computerSelection = getComputerChoice();
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
const maxWins = 3;
let gameEnded = false;
const playerChoice = document.getElementById("player")
const computerChoice = document.getElementById("computer");
const winner = document.getElementById("winner");
const score = document.getElementById("score");
playerChoice.textContent = "Player";
computerChoice.textContent = "Computer";
winner.textContent = "Winner";



function setupEventListeners() {
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    function checkGameEnd() {
        if (playerScore === maxWins || computerScore === maxWins) {
            gameEnded = true;
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }

    rock.addEventListener("click", () => {
        if (!gameEnded) {
            playerSelection = "rock";
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            checkGameEnd();
            console.log("I've been clicked")
        }
    });

    paper.addEventListener("click", () => {
        if (!gameEnded) {
            playerSelection = "paper";
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection); 
            checkGameEnd();
        }
        
    });

    scissors.addEventListener("click", () => {
        if(!gameEnded) {
            playerSelection = "scissors";
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            checkGameEnd();
        }
    });
}

setupEventListeners();

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    computerSelection = "";
    playerChoice.textContent = "Player";
    computerChoice.textContent = "Computer";
    winner.textContent = "Winner";
    score.textContent = "Score";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    gameEnded = false;  
})





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

