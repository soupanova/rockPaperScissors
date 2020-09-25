//Rock, paper, scissors.
//
let playerMove0 = "rock";
let playerMove1 = "scissors"
let playerMove2 = "paper"
let computerMove0 = "rock";
let computerMove1 = "scissors";
let computerMove2 = "paper";

//if playerMove is rock and computerMove is scissors then playerMove wins
//if playerMove is rock and computerMove is paper then playerMove loses
//if playerMove is rock and computerMove is rock then playerMove draws

if(playerMove0 === computerMove1){
    console.log("you win")
} else if(playerMove0 === computerMove2){
    console.log("you lose")
} else(playerMove0 === computerMove0);{
    console.log("you draw")
}

//if playerMove is scissors and computerMove is scissors then playerMove draws
//if playerMove is scissors and computerMove is paper then playerMove wins
//if playerMove is scissors and computerMove is rock then playerMove loses

if(playerMove1 === computerMove1){
    console.log("you draw")
} else if(playerMove1 === computerMove2){
    console.log("you win")
} else(playerMove1 === computerMove0);{
    console.log("you lose")
}

//if playerMove is paper and computerMove is scissors then playerMove loses
//if playerMove is paper and computerMove is paper then playerMove draws
//if playerMove is paper and computerMove is rock then playerMove wins

if(playerMove2 === computerMove1){
    console.log("you lose")
} else if(playerMove2 === computerMove2){
    console.log("you draw")
} else(playerMove2 === computerMove0);{
    console.log("you win")
}





