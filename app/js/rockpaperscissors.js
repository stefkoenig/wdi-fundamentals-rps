////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else {
        winner = "error"
        console.log(playerMove + " is not a possible option. Please choose 'rock', 'paper', or 'scissors'.");
    }
    return winner;
}

var playerWins = 0;
var computerWins = 0;

function playToFive() {

    console.log("Let's play Rock, Paper, Scissors");

    var playerMove;
    var computerMove;
    var winner;
 
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    winner = getWinner(playerMove,computerMove);
    
    if (winner === "player") {
        playerWins += 1;
    }
    else if (winner === "computer") {
        computerWins += 1;
    } 

    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently Player ' + playerWins + ' to Computer ' + computerWins + '\n');
    console.log([playerWins, computerWins]);

    if (playerWins < 5 && computerWins < 5) {
        playToFive();
    }
    else if (playerWins > computerWins) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
     return [playerWins, computerWins];
}

playToFive();



