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
                computerScore++;
                return "Computer";
            case "scissors":
                gameMessage.textContent= "You wins this round.";
                humanScore++;
                return "Human";
        }
    }else if (humanChoice=="paper"){
        switch (computerChoice){
            case "scissors":
                gameMessage.textContent= "Computer wins this round.";
                computerScore++;
                return "Computer";
            case "rock":
                gameMessage.textContent= "You wins this round.";
                humanScore++;
                return "Human";
        }
    }else if (humanChoice=="scissors"){
        switch (computerChoice){
            case "rock":
                gameMessage.textContent= "Computer wins this round.";
                computerScore++;
                return "Computer";
            case "paper":
                gameMessage.textContent= "You wins this round.";
                humanScore++;
                return "Human";
        }

    }
};
function playGame(choice){
    let humanChoice = choice;
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if (humanScore == maxScore || computerScore == maxScore){
        gameMessage.textContent = `${result} is the winner! The Score was Human:${humanScore}, Computer:${computerScore}. Make a selection to start a new game.`;
        humanScore = 0;
        computerScore = 0;
    }else{ 
        switch (result){
            case "Human":
                gameMessage.textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}. 
                ${result} is the winner. Score is Human: ${humanScore}, Computer: ${computerScore}`;
                break;
            case "Computer":
                gameMessage.textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}. 
                ${result} is the winner. Score is Human: ${humanScore}, Computer: ${computerScore}`;
                break;
            case "tie":
                gameMessage.textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}. 
                It's a tie. Score is Human: ${humanScore}, Computer: ${computerScore}`;
                break;
        }
    }

    
    
};

const buttons = document.querySelectorAll("button");
const gameMessage = document.querySelector("#gameMessage");
let humanScore = 0;
let computerScore = 0;
let maxScore = 5;

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        playGame(button.textContent.toLowerCase());
    });
});




// const humanChoice = getHumanChoice()
// const computerChoice = getComputerChoice()
// console.log(humanChoice)
// console.log(computerChoice)
// result = playRound(humanChoice, computerChoice)
// score(humanChoice, computerChoice, result)
