

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

const computerSelection = getComputerChoice();
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;

//Get playerSelection to populate with a string according to the button the player presses
    //The player clicks on rock, paper, or scissors
        //if the player clicks on rock, it will populate the playerSelection as "rock"
            //An eventListener with "click" needs to be applied to the button
                //For the button to have an event listener, it needs to be called with document.getElementById("rock")

/*Create a function that plays one Round of Rock, Paper, Scissors*/
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Will you choose rock, paper, or scissors?", "").toLowerCase();

/*Computer Wins*/
if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        alert(`Computer Wins, ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        alert(`Player score is ${playerScore}. Computer score is ${computerScore}.`)
/*Player Wins*/
    } else if ( (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "rock" && computerSelection === "scissors")) {
                alert(`Player Wins, ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                alert(`Player score is ${playerScore}. Computer score is ${computerScore}.`)
/*Tie Game*/
    } else if ( (playerSelection === "rock" && computerSelection === "rock") ||
                (playerSelection === "paper" && computerSelection === "paper") ||
                (playerSelection === "scissors" && computerSelection === "scissors")) {
                    alert(`Tie Game, both chose ${playerSelection}`);
                    alert(`Player score is ${playerScore}. Computer score is ${computerScore}.`)
    } else {
        alert("Incorrect input");
    }
}

playRound(playerSelection, computerSelection);
