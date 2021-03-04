//store results in scoreboard (2 separate scores) 
let computerScore = 0
let playerScore = 0
let announcer = document.querySelector('#announcer');
//Initialize selection variables
let computerSelection = ''
let playerSelection = ''
//create attributes for playerchoice
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
//on click, playerSelection will update and one round will be played
rock.addEventListener('click', function(){playerSelection = 'rock'; playRound();
});
paper.addEventListener('click', function(){playerSelection = 'paper'; playRound();
});
scissors.addEventListener('click', function(){playerSelection = 'scissors'; playRound();
});
//A single round and conditional to stop when one player reaches 5
function playRound() {
    if (playerScore == 5 || computerScore == 5) {return}
    computerPlay();
    gameRules();
    document.querySelector('#playerScore').textContent = 'Player: ' + playerScore;
    document.querySelector('#computerScore').textContent = 'Computer: ' + computerScore;
    if (playerScore == 5 || computerScore ==5) {finalScore()}
};
//computer randomly selects one of the three options
function computerPlay() {
    let computerFist = Math.random() * 3; 
    if (computerFist <= 1) {
    computerSelection = ("rock");
    } else if (computerFist <= 2) {
    computerSelection = ("paper");
    } else if (computerFist <= 3) {
    computerSelection = ("scissors");
    } else {
    console.log ("Hmmm something is not right...");
    }
};
//determine the winner, let user know who won the round, and add one score to the winner
function gameRules() {
    if (playerSelection == "rock" && computerSelection == "rock") {
        announcer.textContent = "It's a tie!";                
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        announcer.textContent = "It's a tie!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        announcer.textContent = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        announcer.textContent = "Oh no! The computer won. Paper beats Rock.";
        computerScore = computerScore + 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
    announcer.textContent = "You won! Rock beats Scissors!";
    playerScore = playerScore + 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        announcer.textContent = "You won! Paper beats Rock!";
        playerScore = playerScore + 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        announcer.textContent = "Oh no! The computer won. Scissors beats Paper.";
        computerScore = computerScore + 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        announcer.textContent = "Oh no! The computer won. Rock beats Scissors.";
        computerScore = computerScore + 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        announcer.textContent = "You won! Scissors beats Paper!";
        playerScore = playerScore + 1;
    } else {
        alert (`Hmm..something wen't wrong in the gameRules`);
    }
};
//gives a report of who won the game at the end and by how much
function finalScore(){
    if (playerScore > computerScore) {
        announcer.textContent = "Great job! You beat the computer " 
        + playerScore + " to " + computerScore + ".";
    } else if (computerScore > playerScore) {
        announcer.textContent = "Oh no! The computer beat you " 
        + computerScore + " to " + playerScore + ".";
    } else {
        console.log ("There should have been a winner out of 5, something went wrong")
    }            
};