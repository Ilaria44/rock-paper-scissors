//variable declarations + DOM elements selection

let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;

let playerButtons = document.querySelector(".buttons-container.player");
let computerButtons = document.querySelector(".buttons-container.computer");
let resultDiv = document.querySelector("#result");
let nextRoundBtn = document.querySelector(".content > button");

let playerRoundMessage = "Congrats! What a lucky round!";
let computerRoundMessage = "Oh no! You lost this round!";
let tieRoundMessage = "It's a tie! Try again.";

let playerWinsMessage = "You are the winner!";
let computerWinsMessage = "You've lost to the Computer!";

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


/* function resetInterface () {
  Array.from(playerButtons.children).forEach(child => {
    child.classList.remove("active");
  });

  Array.from(computerButtons.children).forEach(child => {
    child.classList.remove("active");
  });

  roundWinnerPara.textContent = "";

  nextRoundBtn.classList.add("hidden"); 
} */


function playGame (e) {

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

    playerButtons.removeEventListener("click", playGame);



    //get round winner + show round message + refresh score

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



    //check if someone has won, if so display message and add button to restart another game, else add button to play next round

    if(playerScore === 5 || computerScore === 5) {
      
      if(playerScore === 5) {
        roundWinnerPara.textContent = playerWinsMessage.toUpperCase();

      } else if (computerScore === 5) {
        roundWinnerPara.textContent = computerWinsMessage.toUpperCase();
      }

      roundWinnerPara.parentElement.classList.add("big-message");

      let newGameBtn = document.createElement("button");
      newGameBtn.textContent = "Try Again";
      roundWinnerPara.parentElement.appendChild(newGameBtn);
      
      newGameBtn.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;

        roundWinnerPara.parentElement.classList.remove("big-message");

        Array.from(playerButtons.children).forEach(child => {
          child.classList.remove("active");
        });
      
        Array.from(computerButtons.children).forEach(child => {
          child.classList.remove("active");
        });
      
        roundWinnerPara.textContent = "";
      
        nextRoundBtn.classList.add("hidden"); 

        playerScoreMessage.textContent = "Your Score: " + playerScore; 
        computerScoreMessage.textContent = "Computer Score: " + computerScore; 

        newGameBtn.remove();
        

        playerButtons.addEventListener("click", playGame);

        

      })
     


    
    } else {
      nextRoundBtn.classList.remove("hidden");

      nextRoundBtn.addEventListener("click", () => {
        Array.from(playerButtons.children).forEach(child => {
          child.classList.remove("active");
        });

        Array.from(computerButtons.children).forEach(child => {
          child.classList.remove("active");
        });

        roundWinnerPara.textContent = "";

        nextRoundBtn.classList.add("hidden");

        playerButtons.addEventListener("click", playGame);

        
      });

    }

  } 

}



playerButtons.addEventListener("click", playGame);
  
