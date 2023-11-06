
//create a function getComputerChoice
//create a variable num and assign to it a random number between 1 and 3
//if 1 return rock, else if 2 return paper, else if 3 return scissors

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  let choice;

  if (num === 1) {
    choice = "rock";
  } else if (num === 2) {
    choice = "paper";
  } else if (num === 3) {
    choice = "scissors";
  }

  return choice;
}

//create a function playRound that accepts the computerSelection and the playerSelection as parameters
//make the playerSelection case insensitive
//create a variable winner
//if player === computer return no winner, else if player > computer return players wins, else return computer wins

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();

  let winnerMessage;

  if (playerSelection === computerSelection) {
    winnerMessage = "It's a tie! Try again.";
  } else if ((playerSelection === "scissors" && computerSelection === "paper")
  || (playerSelection === "paper" && computerSelection === "rock") 
  || (playerSelection === "rock" && computerSelection === "scissors")) {
    winnerMessage = "Congrats! What a lucky round!";  
  } else if ((playerSelection === "scissors" && computerSelection === "rock") 
  || (playerSelection === "paper" && computerSelection === "scissors")
  || (playerSelection === "rock" && computerSelection === "paper")) {
    winnerMessage = "Oh no! You lost this round!";
  } else {
    winnerMessage = "Don't try to cheat! Please, insert a valid value.";
  }

  return winnerMessage;
}


//create a game function
//run the playRound function 5 times asking for prompt to the user and inserting the getComputerChoice function
//keep score
//console log a message with the result of the game

function game() {
  let score = 0;
  
  for (let step = 1; step < 6; step++) {
    let round = playRound(prompt("Round " + step +": make your choice!"), getComputerChoice());

    console.log(round);

    if(round === "Congrats! What a lucky round!") {
    score++;
    } else if (round === "Don't try to cheat! Please, insert a valid value." || round === "It's a tie! Try again.") {
    step--;
    }
  }
  


}

game();