'use strict';
//to hidden score 0&1 and dice
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//dice functionality
btnRoll.addEventListener('click', function () {
  //random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // removing hidden

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //rolling 01 if its true , switch to next player
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
