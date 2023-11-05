
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


