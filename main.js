//Rock, paper, scissors game
//Variables declared for Player choice and Computer choice, message Prompt for player choice
let playerMove = prompt ("SHOOT")
let moves = ["paper", "rock", "scissors"]
let computerMove = getRandomMove()


//set of instructions for computer to randomly generate a move.
function getRandomMove(){
    return moves[Math.floor(Math.random() * 3)]    
}

function getWinner(playerMove, computerMove){
    //if playerMove is rock and computerMove is scissors then playerMove wins = 1 point
    if (playerMove.toLowerCase() === "rock" && computerMove === "scissors") {
        return "player wins [1]"
    }
    //if playerMove is rock and computerMove is paper then playerMove loses = -1 point
    else if (playerMove.toLowerCase() === "rock" && computerMove === "paper") {
        return "player loses [-1]"
    }
    //if playerMove is rock and computerMove is rock then playerMove draws = 0 point
    else if (playerMove.toLowerCase() === "rock" && computerMove === "rock") {
        return "player draws [0]"
    }
    //if playerMove is scissors and computerMove is scissors then playerMove draws = 0 point
    else if (playerMove.toLowerCase() === "scissors" && computerMove ==="scissors") {
        return "player draws [0]"
    }
    //if playerMove is scissors and computerMove is paper then playerMove wins = 1 point
    else if (playerMove.toLowerCase() === "scissors" && computerMove ==="paper") {
        return "player wins [1]"
    }
    //if playerMove is scissors and computerMove is rock then playerMove loses = -1 point
    else if (playerMove.toLowerCase() === "scissors" && computerMove ==="rock") {
        return "player loses [0]"
    }
    //if playerMove is paper and computerMove is scissors then playerMove loses = -1 point
    else if (playerMove.toLowerCase() === "paper" && computerMove ==="scissors") {
        return "player loses [0]"
    }
    //if playerMove is paper and computerMove is paper then playerMove draws = 0 point
    else if (playerMove.toLowerCase() === "paper" && computerMove ==="paper") {
        return "player draws [0]"
    }
    //if playerMove is paper and computerMove is rock then playerMove wins = 1 point
    else (playerMove.toLowerCase() === "paper" && computerMove ==="rock"); {
        return "player wins [1]"
    }
}

//Testing the result of the match
let result = getWinner(playerMove, computerMove)
alert(result)
let playAgain =  confirm("Would you like to play again?")

//We need our code to run on a loop 
