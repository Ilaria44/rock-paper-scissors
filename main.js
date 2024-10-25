let computerScore = 0;
let playerScore = 0;

let computerChoice = "";
let playerChoice = "";

let playerButtons = document.querySelector(".buttons-container.player");

//create a function getComputerChoice, random number between 1 and 3 equals to computer choice + make button ui change only after player selection


function getComputerChoice() {
  let computerButtons = document.querySelector(".buttons-container.computer");

  let num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    computerChoice = "rock";
    //computerButtons.children[0].classList.add("active");
  } else if (num === 2) {
    computerChoice = "paper";
    //computerButtons.children[1].classList.add("active");
  } else if (num === 3) {
    computerChoice = "scissors";
   // computerButtons.children[2].classList.add("active");
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

  })


}


//get player choice based on which button is clicked + create clicked button ui change + ui change for 

function getPlayerChoice () {


playerButtons.addEventListener("click", function getSelection (e) {
  playerChoice = e.target.id;

  e.target.classList.add("active");
  playerButtons.removeEventListener("click", getSelection);
})

}

//play round by getting both player and computer choice

let playerWinsRound = "Congrats! What a lucky round!";
let computerWinsRound = "Oh no! You lost this round!";
let tieRound = "It's a tie! Try again.";


function playRound(playerSelection, computerSelection) {

  let roundWinner;

  if (playerSelection === computerSelection) {
    roundWinner = "tieRound";
  } else if ((playerSelection === "scissors" && computerSelection === "paper")
  || (playerSelection === "paper" && computerSelection === "rock") 
  || (playerSelection === "rock" && computerSelection === "scissors")) {
    roundWinner = playerWinsRound;  
  } else if ((playerSelection === "scissors" && computerSelection === "rock") 
  || (playerSelection === "paper" && computerSelection === "scissors")
  || (playerSelection === "rock" && computerSelection === "paper")) {
    roundWinner = computerWinsRound;
  }

  return roundWinner;
}

playRound(getPlayerChoice(), getComputerChoice());

//create a game function
//run the playRound function 5 times asking for prompt to the user and inserting the getComputerChoice function
//keep score
//console log a message with the result of the game

function game() {
  let score = 0;
  let gameWinner;
  
  for (let step = 1; step < 6; step++) {
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

}



//game();