function playRound(playerSelection) {
    
  let computerSelection = computerPlay();
  const result = document.querySelector('#result');
  
  if (playerSelection == computerSelection) {
      result.textContent = 'TIE! Try Again';
      return 0;
  }
  
  if (playerSelection == 'rock') {
      switch(computerSelection) {
          case 'paper':
              result.textContent = 'You Lose. Paper beats Rock';
              break;
          case 'scissors':
              result.textContent = 'You Win! Rock beats Scissors';
              break;
      }
  } else if (playerSelection == 'paper') {
      switch(computerSelection) {
          case 'rock':
              result.textContent = 'You Win! Paper beats Rock';
              break;
          case 'scissors':
              result.textContent = 'You Lose. Scissors beat Paper';
              break;
      }
  } else if (playerSelection == 'scissors') {
      switch(computerSelection) {
          case 'rock':
              result.textContent = 'You Lose. Rock beats Scissors';
              break;
          case PAPER:
              result.textContent = 'You Win! Scissors beat Paper';
              break;
      }
  } else {
      result.textContent = 'ERROR. Something went wrong';
      return -1;
  }

 return 0;
}

function computerPlay() {
  let i = Math.floor(Math.random() * 3);
  switch(i) {
      case 0:
          return 'rock';
      case 1:
          return 'paper';
      case 2:
          return 'scissors';
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => playRound(button.id));
  
});