let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
};
function getAbsoluteDistance(a, b){
  return Math.abs(a - b);
};
function compareGuesses(userGuess, computerGuess, secretTarget) {
  //checkHumanGuess(userGuess);
  if (getAbsoluteDistance(secretTarget, userGuess) === getAbsoluteDistance(secretTarget, computerGuess)){
    return true;
  } else if (getAbsoluteDistance(secretTarget, userGuess) > getAbsoluteDistance(secretTarget, computerGuess)) {
    return false;
  } else {
    return true;
  }

};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore ++;
  }else {
    computerScore ++;
  }
};

function advanceRound() {
  currentRoundNumber ++;
}
/* function checkHumanGuess(guess) {
  if (guess < 0 || guess > 9) {
    window.alert('number out of range');
  }
};*/
