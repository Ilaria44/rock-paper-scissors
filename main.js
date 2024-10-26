let computerScore = 0;
let playerScore = 0;

let playerButtons = document.querySelector(".buttons-container.player");
let computerButtons = document.querySelector(".buttons-container.computer");
let resultDiv = document.querySelector("#result");

let computerChoice;
let playerChoice;


let playerScoreMessage = document.querySelector("#player-score p");
playerScoreMessage.textContent = "Your Score: " + playerScore; 

let computerScoreMessage = document.querySelector("#computer-score p");
computerScoreMessage.textContent = "Computer Score: " + computerScore; 

//get computer choice by random number between 1 and 3

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    computerChoice = "rock";
  } else if (num === 2) {
    computerChoice = "paper";
  } else if (num === 3) {
    computerChoice = "scissors";
  }

}

//play round by taking in both computer and player choices + change buttons ui + return result message

function playRound (e) {
 if(e.target.tagName === "BUTTON") {
  getComputerChoice();

  switch (computerChoice) {
    case "rock":
      computerButtons.children[0].classList.add("active");
      break;

    case "paper":
      computerButtons.children[1].classList.add("active");
      break;

    case "scissors":
      computerButtons.children[2].classList.add("active");
      break;
  }

  playerChoice = e.target.id;
  e.target.classList.add("active");

  playerButtons.removeEventListener("click", playRound);

  let playerRoundMessage = "Congrats! What a lucky round!";
  let computerRoundMessage = "Oh no! You lost this round!";
  let tieRoundMessage = "It's a tie! Try again.";

  let roundWinner;

  if (playerChoice === computerChoice) {
    roundWinner = "tie";
  } else if ((playerChoice === "scissors" && computerChoice === "paper")
  || (playerChoice === "paper" && computerChoice === "rock") 
  || (playerChoice === "rock" && computerChoice === "scissors")) {
    roundWinner = "player";  
  } else if ((playerChoice === "scissors" && computerChoice === "rock") 
  || (playerChoice === "paper" && computerChoice === "scissors")
  || (playerChoice === "rock" && computerChoice === "paper")) {
    roundWinner = "computer";
  }

  let roundWinnerPara = document.createElement("p");
  
  switch (roundWinner) {
    case "tie":
      roundWinnerPara.textContent = tieRoundMessage.toUpperCase();
      break;

    case "player":
      roundWinnerPara.textContent = playerRoundMessage.toUpperCase();
      playerScore++;
      break;

    case "computer":
      roundWinnerPara.textContent = computerRoundMessage.toUpperCase();
      computerScore++;
  }

  resultDiv.appendChild(roundWinnerPara);

  playerScoreMessage.textContent = "Your Score: " + playerScore; 
  computerScoreMessage.textContent = "Computer Score: " + computerScore; 


 }
}


playerButtons.addEventListener("click", playRound);

//create a function getComputerChoice, random number between 1 and 3 equals to computer choice + make button ui change only after player selection

/* 
function getComputerChoice() {
  let computerChoice;
  let computerButtons = document.querySelector(".buttons-container.computer");

  let num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    computerChoice = "rock";
  } else if (num === 2) {
    computerChoice = "paper";
  } else if (num === 3) {
    computerChoice = "scissors";
  }


  playerButtons.addEventListener("click", function changeButtons (e) {
    if(e.target.tagName === "BUTTON") {
      if (num === 1) {
        computerButtons.children[0].classList.add("active");
      } else if (num === 2) {
        computerButtons.children[1].classList.add("active");
      } else if (num === 3) {
        computerButtons.children[2].classList.add("active");
      }
    }

    playerButtons.removeEventListener("click", changeButtons);
   
    

  })

  return computerChoice;

}


//get player choice based on which button is clicked + create clicked button ui change + ui change for 

function getPlayerChoice () {
let playerChoice;

playerButtons.addEventListener("click", function getSelection (e) {
  playerChoice = e.target.id;

  e.target.classList.add("active");
  playerButtons.removeEventListener("click", getSelection);

  return playerChoice;
})




}


//play round by getting both player and computer choice + show message of round winner

let playerRoundMessage = "Congrats! What a lucky round!";
let computerRoundMessage = "Oh no! You lost this round!";
let tieRoundMessage = "It's a tie! Try again.";


function playRound(playerSelection, computerSelection) {
 
  let roundWinner;

  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  } else if ((playerSelection === "scissors" && computerSelection === "paper")
  || (playerSelection === "paper" && computerSelection === "rock") 
  || (playerSelection === "rock" && computerSelection === "scissors")) {
    roundWinner = "player";  
  } else if ((playerSelection === "scissors" && computerSelection === "rock") 
  || (playerSelection === "paper" && computerSelection === "scissors")
  || (playerSelection === "rock" && computerSelection === "paper")) {
    roundWinner = "computer";
  }

  let roundWinnerPara = document.createElement("p");
  
  switch (roundWinner) {
    case "tie":
      roundWinnerPara.textContent = tieRoundMessage;
      break;

    case "player":
      roundWinnerPara.textContent = playerRoundMessage;
      break;

    case "computer":
      roundWinnerPara.textContent = computerRoundMessage;
  }

  resultDiv.appendChild(roundWinnerPara);


  return roundWinner;
}

playRound(getPlayerChoice(), getComputerChoice());

//create game to play rounds until player or computer reach score 5

function game() {
  let gameWinner;

  /* while() {

  } */
  
  /* for (let step = 1; step < 6; step++) {
    let round = playRound(prompt("Round " + step +": make your choice! Will it be rock, paper or scissors?"), getComputerChoice());

    console.log(round);

    if(round === playerWinsRound) {
    score++;
    } else if (round === invalidRound || round === tieRound) {
    step--;
    }
  }
  
  if (score >= 3) {
    gameWinner = "Hip Hip Hurray! You're the winner of this game!";
  } else {
    gameWinner = "I'm sorry, today is not your lucky day! You can try again to challenge me!"
  }

  console.log(gameWinner); 

}*/



//game(); */