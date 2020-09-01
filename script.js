const gameText = document.getElementById("game-text");
const turnText = document.createElement('p');
const winCount = document.getElementById("win");
const loseCount = document.getElementById("lose");
const drawCount = document.getElementById("draw");
var playerSelection
var outcome
var win = 0
var lose = 0
var draw = 0
function playerPick(playerSelection) {
    computerSelection = (Math.floor((Math.random() * 3) + 1))
    gameText.appendChild(turnText);
    if (computerSelection == 1) {
      computerSelection = "Rock";
    } else if (computerSelection == 2) {
      computerSelection = "Paper";
    } else {
    computerSelection = "Scissors";
  };
  switch(computerSelection) {
    case "Rock":
      if (playerSelection == "Rock") {
      outcome = "It's a Tie! Doesn't Count!";
      draw++;
      } else if (playerSelection == "Paper") {
      outcome = "You Win!";
      win++;
      } else {
      outcome = "You Lose!";
      lose++;
      };
    break;
    case "Paper":
      if (playerSelection == "Paper") {
      outcome = "It's a Tie! Doesn't Count!";
      draw++;
      } else if (playerSelection == "Scissors") {
      outcome = "You Win!";
      win++;
      } else {
      outcome = "You Lose!";
      lose++;
      };
    break;
    case "Scissors":
      if (playerSelection == "Scissors") {
      outcome = "It's a Tie! Doesn't Count!"
      draw++;
      } else if (playerSelection == "Rock") {
      outcome = "You Win!"
      win++;
      } else {
      outcome = "You Lose!"
      lose++;
    };
  };
  winCount.textContent = win; 
  loseCount.textContent = lose;
  drawCount.textContent = draw;
  turnText.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`;
};