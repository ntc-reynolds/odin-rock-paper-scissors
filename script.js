function getHumanChoice(){
    return parseInt(prompt("Please enter your selection. 1. Rock, 2. Paper. 3 Scissors."));
};
function getComputerChoice(){
   return Math.floor(Math.random()*3+1);
};

function playRound(humanChoice, computerChoice){
    if(humanChoice == 1){
        if(computerChoice == 1){
            console.log("It's a tie.");
            return "tie";
        }else if(computerChoice==2){
            console.log("Computer wins this round.");
            return "Computer";
        }else{
            console.log("You wins this round.");
            return "Human";
        }
    }else if(humanChoice==2){
        if(computerChoice==1){
            console.log("You wins this round.");
            return "Human";
        }else if(computerChoice==2){
            console.log("It's a tie.");
            return "tie";
        }else{
            console.log("Computer wins this round.");
            return "Computer";
        }
    }else{
        if(computerChoice==1){
            console.log("Computer wins this round.");
            return "Computer";
        }else if(computerChoice==2){
            console.log("You wins this round.");
            return "Human";
        }else{
            console.log("It's a tie.");
            return "tie";
        }
    }
}


function playGame(max){
    let maxScore = max;
    let humanScore = 0;
    let computerScore = 0;
    console.log("1. Rock, 2. Paper. 3 Scissors.");
    do{
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        result = playRound(humanChoice, computerChoice);
        if(result=="Human"){
            humanScore++;
            console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. ${result} is the winner.`);
            console.log(`Score is Human: ${humanScore}, Computer: ${computerScore}`);
        }else if(result=="Computer"){
            computerScore++;
            console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. ${result} is the winner.`);
            console.log(`Score is Human: ${humanScore}, Computer: ${computerScore}`);
        }else{
            console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. It's a tie.`);
            console.log(`Score is Human: ${humanScore}, Computer: ${computerScore}`);
        }
    }while(humanScore<maxScore && computerScore<maxScore);
    console.log("Game over.")
};
playGame(5);

// const humanChoice = getHumanChoice()
// const computerChoice = getComputerChoice()
// console.log(humanChoice)
// console.log(computerChoice)
// result = playRound(humanChoice, computerChoice)
// score(humanChoice, computerChoice, result)
