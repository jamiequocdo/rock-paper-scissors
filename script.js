

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
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

paper.addEventListener("click", () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

scissors.addEventListener("click", () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

//Get playerSelection to populate with a string according to the button the player presses
//The player clicks on rock, paper, or scissors
//if the player clicks on rock, it will populate the playerSelection as "rock"
//An eventListener with "click" needs to be applied to the button
//For the button to have an event listener, it needs to be called with document.getElementById("rock")

/*Create a function that plays one Round of Rock, Paper, Scissors*/
function playRound(playerSelection, computerSelection) {

    /*Computer Wins*/
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(`Computer Wins, ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`Player score is ${playerScore}. Computer score is ${computerScore}.`)
        /*Player Wins*/
    } else if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")) {
        console.log(`Player Wins, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Player score is ${playerScore}. Computer score is ${computerScore}.`)
        /*Tie Game*/
    } else if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
        console.log(`Tie Game, both chose ${playerSelection}`);
        console.log(`Player score is ${playerScore}. Computer score is ${computerScore}.`)
    }
}
