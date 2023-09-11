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

playerChoose.forEach(item => {
    const element = document.getElementById(item);
    element.addEventListener("click", ()=> {
        playerSelection = item
        computerSelection = getComputerChoice();
    })
    
})


const playerChoice = document.getElementById("player")
const computerChoice = document.getElementById("computer");
const winner = document.getElementById("winner");
const score = document.getElementById("score");

console.log(playerChoice)
playerChoice.textContent = "Hello Worlds"
computerChoice.textContent = "Goodbye Worlds"
winner.textContent = "Winner";
//Get playerSelection to populate with a string according to the button the player presses
    //The player clicks on rock, paper, or scissors
        //if the player clicks on rock, it will populate the playerSelection as "rock"
            //*An eventListener with "click" needs to be applied to the button
            //

                //*For the button to have an event listener, it needs to be called with document.getElementById("")
                //Create variable rock add value of button id="rock"
                //create variable paper and add value of paper button
                //create variable of scissors and add value of scissors button




/*Create a function that plays one Round of Rock, Paper, Scissors*/
function playRound (playerSelection, computerSelection) {

    /*Computer Wins*/
    
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            playerChoice.textContent = `${playerSelection.toUpperCase()}`;
            computerChoice.textContent = `${computerSelection.toUpperCase()}`;
            computerScore++;
            if (computerScore === 3) {
                winner.textContent = "Computer Wins The Game!";
                return;
            } else {
                winner.textContent = "Computer Wins Round";
                score.textContent = `Player score is ${playerScore}. Computer score is ${computerScore}.`
            }
            
            
    /*Player Wins*/
    } else if ( (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "rock" && computerSelection === "scissors")) {
                playerChoice.textContent = `${playerSelection.toUpperCase()}`;
                computerChoice.textContent = `${computerSelection.toUpperCase()}`;
                playerScore++;
                if (playerScore === 0) {
                    winner.textContent = "Player Wins The Game!";
                } else {
                    winner.textContent = "Player Wins Round";
                    score.textContent = `Player score is ${playerScore}. Computer score is ${computerScore}.`
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

