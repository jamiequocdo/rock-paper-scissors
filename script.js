
/*Putting choices in an array, and then using choices[indexof] to get the choices using math.
Math.random() gets me a number from 0 to 1. Multiplied by 3 will get me decimal numbers up to 3.
Math.floor() rounds the numbers down.
Whether I use an arrow function or doing it traditionally, it ultimately does not matter.
*/
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

function disableButtons() {
    document.querySelectorAll(".choice-button").forEach(button => {
        button.disabled = true;
    })
}

function enableButtons() {
    document.querySelectorAll(".choice-button").forEach(button => {
        button.disabled = false;
    })
}



function setupEventListeners() {
    const buttons = document.querySelectorAll(".choice-button")

    function checkGameEnd() {
        if (playerScore === maxWins || computerScore === maxWins) {
            gameEnded = true;
            disableButtons()
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (!gameEnded) {
                playerSelection = button.dataset.choice;
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                checkGameEnd();
            }
        });
        })
    }

setupEventListeners();

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    computerSelection = "";
    playerChoice.textContent = "Player";
    computerChoice.textContent = "Computer";
    winner.textContent = "Winner";
    score.textContent = "Score";
    enableButtons();
    gameEnded = false;  
}





/*Create a function that plays one Round of Rock, Paper, Scissors*/
function playRound (playerSelection, computerSelection) {
    const playerChoiceText = playerSelection.toUpperCase();
    const computerChoiceText = computerSelection.toUpperCase();

    /*Computer Wins*/

    if (playerSelection === computerSelection) {
        winner.textContent = "Tie Round"
    } else if( 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")) {
            playerScore++;
            winner.textContent = playerScore === maxWins ? "Player Wins The Game" : "Player Wins Round";

    /*Player Wins*/
    } else {
        computerScore++;
        winner.textContent = computerScore === maxWins ? "Computer Wins The Game" : "Computer Wins Round"
    }

    playerChoice.textContent = playerChoiceText;
    computerChoice.textContent = computerChoiceText;
    score.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}`;

}
