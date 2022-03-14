'use strict';
/*

console.log(document.querySelector('.message').textContent); // document.querySelector is used to access the class of html file.
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 14; // we can assign value and manipulate the data using = in DOM.
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Number');
  }

  //when Player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too High' : ' Too Low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else displayMessage('You Lost the Game!');
  }

  //When score is too high
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else
  //     document.querySelector('.message').textContent = 'You Lost the Game!';
  //   // document.querySelector('.score').textContent = 0;

  //   //when score is too low
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else
  //     document.querySelector('.message').textContent = 'You Lost the Game!';
  //   // document.querySelector('.score').textContent = 0;
  // }
});

//Implement a game reset functionality so that player can make a new guess.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
