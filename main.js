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
  playerButtons.addEventListener("click", playRound);

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

    let nextRoundBtn = document.createElement("button");
    nextRoundBtn.textContent = "Next Round";
    resultDiv.parentElement.parentElement.appendChild(nextRoundBtn);

    nextRoundBtn.addEventListener("click", () => {
      Array.from(playerButtons.children).forEach(child => {
        child.classList.remove("active");
      });

      Array.from(computerButtons.children).forEach(child => {
        child.classList.remove("active");
      });

      roundWinnerPara.textContent = "";
    });

    return playerScore, computerScore;

  }
}





//create game to play rounds until player or computer reach score 5

function game() {
  let gameWinner;
  
 // while(computerScore < 5 && playerScore < 5) {
  playerButtons.addEventListener("click", playRound);

  //}

}


game();
  
