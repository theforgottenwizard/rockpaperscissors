/*

let playerChoice = ""

*/
const playerBtns = document.querySelectorAll(".btn")
let playerSelection = "";
playerBtns.forEach(btn=>btn.addEventListener("click", (e)=>{
    playerSelection = e.target.innerText;
    computerSelection = getComputerChoice();
    displaySelections(e,computerSelection)
    playRound(playerSelection, computerSelection)
}))

const playerScoreDisplay = document.querySelector(".display-score-player")
const computerScoreDisplay = document.querySelector(".display-score-computer")
const displayWinner = document.querySelector(".display-winner")
const playerChoiceDisplay = document.querySelector(".player-choice")
const computerChoiceDisplay = document.querySelector(".computer-choice")

function displayScores(){
    playerScoreDisplay.innerText = `Your Score: ${playerScore}`
    computerScoreDisplay.innerText = `Computer's Score: ${computerScore}`  
    if(playerScore === 5 || computerScore===5){
        displayWinner.style.display = "flex"
        displayWinner.style.alignItems ="center"
        if(playerScore>computerScore){
            displayWinner.innerText = "You Won!!!"
        }else displayWinner.innerText = "Computer Won!!!"
    }
}

function displaySelections(e, computerSelection){
    playerChoiceDisplay.innerText = e.target.innerText;
    computerChoiceDisplay.innerText = computerSelection;
}

const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log(`Your selection: ${playerSelection}, computer's selection: ${computerSelection}. It is a draw!`)
        displayScores();
        return("It's a draw!");
    }else if((playerSelection==="PAPER" & computerSelection==="ROCK")||(playerSelection==="SCISSORS" & computerSelection==="PAPER")||(playerSelection==="ROCK" & computerSelection==="SCISSORS")){
        playerScore +=1;
        console.log(`Your selection: ${playerSelection}, computer's selection: ${computerSelection}. You Win!`)
        displayScores();
        return("You Win!!!");
    }else {
        computerScore += 1;
        console.log(`Your selection: ${playerSelection}, computer's selection: ${computerSelection}. Computer Wins!`);
        displayScores();
        return("Computer Wins!!!");
    };
}


function getComputerChoice(){
    const randomNumber  = Math.floor(Math.random()*3);
    let computersChoice = computerChoices[randomNumber];
    return computersChoice;

}

/*
function game(){
    for(let i =0; i<5; i++){
        let playerSelection = prompt("Choose your weapon! Rock, Paper or Scissors...");
        playerSelection = playerSelection.toUpperCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(`Computer's choice: ${computerSelection}, your choice: ${playerSelection}`)
        
    }
    if(computerScore>playerScore){
        console.log("Computer Wins!")
    }else if(computerScore<playerScore){
        console.log("You Win!!!")
    }else console.log("Draw!")
}
*/



