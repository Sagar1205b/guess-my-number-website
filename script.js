'use strict';

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
    // document.querySelector('.message').textContent = '๐No number!';
    displayMessage('๐No number!');
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = '๐ฅณcorrect!';
    displayMessage('๐ฅณcorrect!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  }
  // else if (guess > secretNumber) {
  //   // document.querySelector('.message').textContent = '๐Too High';
  //   displayMessage('๐Too High');
  // } else if (guess < secretNumber) {
  //   // document.querySelector('.message').textContent = '๐ Too Low';
  //   displayMessage('๐ Too Low');
  // }
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess != secretNumber) {
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '๐ Too high!' : '๐ Too low!';
    if (score > 1) {
      displayMessage(guess > secretNumber ? '๐ Too high!' : '๐ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('๐You lost the game!');
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
    // document.querySelector('.message').textContent = '๐ฅณcorrect!';
    displayMessage('๐ฅณcorrect!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  }
});
