////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

rockPaperScissors();

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
var playerMove;
var computerMove;
var winner;

function rockPaperScissors() {
    console.log("Let's play Rock, Paper, Scissors.");
    getPlayerMove();  
    getComputerMove();
    getWinner();
}


function getPlayerMove(move) {
    move = getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     /* Your Expression */
    if (move !== null || undefined){
    playerMove = move;
    console.log("The player chose " + move);
    }
    else
    return getInput();
}


function getComputerMove(move) {
    move = randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     /* Your Expression */
    if (move !== null || undefined){
    computerMove = move;
    console.log("The computer chose " + move);
    }
    else
    return randomPlay();
}


function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == "rock" && computerMove == "scissors"){
        winner = "player";
        return console.log(winner + "wins!");
    }

    else if (playerMove == "scissors" && computerMove == "paper"){
        winner = "player";
        return console.log(winner + "wins!");
    }

    else if (playerMove == "paper" && computerMove == "rock"){
        winner = "player";
        return console.log(winner + "wins!");
    }

    else if ( computerMove == "rock" && playerMove == "scissors"){
        winner = "computer";
        return console.log(winner + "wins!");
    }

    else if ( computerMove == "scissors" && playerMove == "paper"){
        winner = "computer";
        return console.log(winner + "wins!");
    }

    else if ( computerMove == "paper" && playerMove == "rock"){
        winner = "computer";
        return console.log(winner + "wins!");
    }

    else {
        winner = "tie";
        return console.log("it's a " + winner);
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i=0; i<25; i++) {
        if (playerWins === 5 || computerWins === 5) {
            return("FINAL SCORE: Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
        } 
        else 
        {
            if (winner === "player") 
            {
             playerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            } 
            else if (winner === "computer") 
            {
             computerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            }
        getPlayerMove();    

        }
    }
}
