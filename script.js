function getComputerChoice(){
    let choices = Array("Rock", "Paper", "Scissors");
    return choices[Math.floor(Math.random()*3+1)-1].toLowerCase();
};

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        gameMessage.textContent= "It's a tie.";
        return "tie"
    }else if (humanChoice=="rock"){
        switch (computerChoice){
            case "paper":
                gameMessage.textContent= "Computer wins this round.";
                return "computer";
            case "scissors":
                gameMessage.textContent= "You wins this round.";
                return "Human";
        }
    }else if (humanChoice=="paper"){
        switch (computerChoice){
            case "scissors":
                gameMessage.textContent= "Computer wins this round.";
                return "computer";
            case "rock":
                gameMessage.textContent= "You wins this round.";
                return "Human";
        }

    }else if (humanChoice=="scissors"){
        switch (computerChoice){
            case "rock":
                gameMessage.textContent= "Computer wins this round.";
                return "computer";
            case "paper":
                gameMessage.textContent= "You wins this round.";
                return "Human";
        }

    }
};
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

const buttons = document.querySelectorAll("button");
const gameMessage = document.querySelector("#gameMessage");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        playRound(button.textContent.toLowerCase(), getComputerChoice());
        // gameMessage.textContent = button.textContent.toLowerCase();
    });
});




// const humanChoice = getHumanChoice()
// const computerChoice = getComputerChoice()
// console.log(humanChoice)
// console.log(computerChoice)
// result = playRound(humanChoice, computerChoice)
// score(humanChoice, computerChoice, result)
