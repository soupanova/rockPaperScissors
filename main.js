//Rock, paper, scissors.
//
let playerMove = "rock";
let computerMove = "paper";

function getWinner(playerMove, computerMove){
    //if playerMove is rock and computerMove is scissors then playerMove wins = 1 point
    if (playerMove === "rock" && computerMove === "scissors") {
        return "player wins"
    }
    //if playerMove is rock and computerMove is paper then playerMove loses = -1 point
    else if (playerMove === "rock" && computerMove === "paper") {
        return "player loses"
    }
    //if playerMove is rock and computerMove is rock then playerMove draws = 0 point
    else if (playerMove === "rock" && computerMove === "rock") {
        return "player draws"
    }
    //if playerMove is scissors and computerMove is scissors then playerMove draws = 0 point
    else if (playerMove === "scissors" && computerMove ==="scissors") {
        return "player draws"
    }
    //if playerMove is scissors and computerMove is paper then playerMove wins = 1 point
    else if (playerMove === "scissors" && computerMove ==="paper") {
        return "player draws"
    }
    //if playerMove is scissors and computerMove is rock then playerMove loses = -1 point
    else if (playerMove === "scissors" && computerMove ==="rock") {
        return "player draws"
    }
    //if playerMove is paper and computerMove is scissors then playerMove loses = -1 point
    else if (playerMove === "paper" && computerMove ==="scissors") {
        return "player draws"
    }
    //if playerMove is paper and computerMove is paper then playerMove draws = 0 point
    else if (playerMove === "paper" && computerMove ==="paper") {
        return "player draws"
    }
    //if playerMove is paper and computerMove is rock then playerMove wins = 1 point
    else (playerMove === "paper" && computerMove ==="rock"); {
        return "player draws"
    }
}

let result = getWinner("rock", "paper")

function

