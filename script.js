'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let guess;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '💀No number!';
    displayMessage('💀No number!');
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = '🥳correct!';
    displayMessage('🥳correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  }
  // else if (guess > secretNumber) {
  //   // document.querySelector('.message').textContent = '😒Too High';
  //   displayMessage('😒Too High');
  // } else if (guess < secretNumber) {
  //   // document.querySelector('.message').textContent = '😑 Too Low';
  //   displayMessage('😑 Too Low');
  // }
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess != secretNumber) {
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😑You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent =
        'secretNumber' + secretNumber;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '90rem';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'grey';
  document.querySelector('.number').style.width = '15rem';
  if (guess == secretNumber) {
    // document.querySelector('.message').textContent = '🥳correct!';
    displayMessage('🥳correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  }
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
