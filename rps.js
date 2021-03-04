//Initialize variables
let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;
let announcer = document.querySelector('#announcer');
let showPlayerScore = document.querySelector('#playerScore');
let showComputerScore = document.querySelector('#computerScore');

//Selecting Rock
const rock = document.getElementById("rock");
rock.addEventListener('click', rockFunc);
function rockFunc() {
    if (playerScore == 5 || computerScore == 5) {return}
    computerPlay();
    playerSelection = 'rock'; 
    if (computerSelection == "rock") {
        announcer.textContent = "Rock-Rock. It's a tie!";
    } else if (computerSelection == "paper") {
        announcer.textContent = "Oh no! The computer won. Paper beats Rock.";
        computerScore = computerScore + 1;
    } else if (computerSelection == "scissors") {
        announcer.textContent = "You won! Rock beats Scissors!";
        playerScore = playerScore + 1;
    } else { console.log (`Hmmm..the rockFunction didn't work`);
    };
    scorekeep();
};

//Selecting Paper
const paper = document.getElementById("paper");
paper.addEventListener('click', paperFunc);
function paperFunc() {
    if (playerScore == 5 || computerScore == 5) {return}
    computerPlay();
    playerSelection = 'paper'; 
    if (computerSelection == "rock") {
        announcer.textContent = "You won! Paper beats Rock!";
        playerScore = playerScore + 1;
    } else if (computerSelection == "paper") {
        announcer.textContent = "Paper-Paper. It's a tie!";
    } else if (computerSelection == "scissors") {
        announcer.textContent = "Oh no! The computer won. Scissors beats Paper.";
        computerScore = computerScore + 1;
    } else { console.log (`Hmmm..the Paper Function didn't work`); 
    };
    scorekeep();
};

//Selecting Scissors
const scissors = document.getElementById("scissors");
scissors.addEventListener('click', scissorsFunc);
function scissorsFunc() {
    if (playerScore == 5 || computerScore == 5) {return}
    computerPlay();
    playerSelection = 'scissors';
    if (computerSelection == "rock") {
        announcer.textContent = "Oh no! The computer won. Rock beats Scissors.";
        computerScore = computerScore + 1;
    } else if (computerSelection == "paper") {
        announcer.textContent = "You won! Scissors beats Paper!";
        playerScore = playerScore + 1;
    } else if (computerSelection == "scissors") {
        announcer.textContent = "Scissors-Scissors. It's a tie!";
    } else { console.log (`Hmmm..the Scissors Function didn't work`); 
    };
    scorekeep();
};

//Scorekeeper
function scorekeep() {
    showPlayerScore.textContent = 'Player: ' + playerScore;
    showComputerScore.textContent = 'Computer: ' + computerScore;
    if (playerScore == 5 || computerScore ==5) {finalScore()};
};

//Computer randomly selects one of the three options
function computerPlay() {
    let computerFist = Math.random() * 3; 
    if (computerFist <= 1) {
    computerSelection = ("rock")
    } else if (computerFist <= 2) {
    computerSelection = ("paper")
    } else if (computerFist <= 3) {
    computerSelection = ("scissors")
    } else {
    console.log ("The computer couldn't figure out what to pick! That's weird.");
    };
};

//Gives a report of who won the game at the end and by how much
function finalScore(){
    if (playerScore > computerScore) {
        announcer.textContent = "Great job! You beat the computer " 
        + playerScore + " to " + computerScore + ".";
    } else if (computerScore > playerScore) {
        announcer.textContent = "Oh no! The computer beat you " 
        + computerScore + " to " + playerScore + ".";
    } else {
        console.log ("There should have been a winner out of 5, something went wrong")
    };          
};