const playerBtns = document.querySelectorAll(".btn")
playerBtns.forEach(btn=>btn.addEventListener("click", choose))
let playerChoice = ""
const playerChoiceDisplay = document.querySelector(".player-choice")
const computerChoiceDisplay = document.querySelector(".computer-choice")
const computerChoices = ["ROCK", "PAPER", "SCISSORS"]

function choose(e){
    playerChoiceDisplay.innerText = e.target.innerText
    computerChoiceDisplay.innerText= "Please wait while computer makes its choice!"
    setTimeout(()=>{chooseForComputer()}, 3000)
}

function chooseForComputer(){
    const randomNumber  = Math.floor(Math.random()*3)
    let computersChoice = computerChoices[randomNumber]
    computerChoiceDisplay.innerText = computersChoice
    decideWinner()
}

function decideWinner(){
    if(playerChoiceDisplay.innerText === computerChoiceDisplay.innerText){
        console.log("It's a draw!")
    }else if((playerChoiceDisplay.innerText==="PAPER" & computerChoiceDisplay.innerText==="ROCK")||(playerChoiceDisplay.innerText==="SCISSORS" & computerChoiceDisplay.innerText==="PAPER")||(playerChoiceDisplay.innerText==="ROCK" & computerChoiceDisplay.innerText==="SCISSORS")){
        console.log("You Win!!!")
    }else console.log("Computer Wins!!!")
}
