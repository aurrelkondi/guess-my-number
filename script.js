'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number🥳';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.guess').value = 10)); */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    console.log((document.querySelector('.message').textContent = 'No Number'));
  }
});
