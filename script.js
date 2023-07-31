'use strict';

//* Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//* Edit text content of the selected elements or starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden'); //? CSS class selection do not require a .(period)

const playerTotalScores = [0, 0];
let currentScore = 0;
let playerActive = 0;

//* Rolling functionality
btnRoll.addEventListener('click', function () {
  //TODO Generating a random number for dice
  const dice = Math.trunc(Math.random() * 6) + 1; //console.log(dice);
  //TODO Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  // Check if rolled 1
  if (dice !== 1) {
    //TODO Adding to the dice to current score
    currentScore += dice; //console.log(currentScore);
    //TODO Display the score
    document.getElementById(`current--${playerActive}`).textContent =
      currentScore;
  } else {
    //TODO change player
    document.getElementById(`current--${playerActive}`).textContent = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

//* btn HOlD event handler
btnHold.addEventListener('click', function () {
  //TODO add the current score to TOTAL score
  playerTotalScores[playerActive] += currentScore;
  console.log(playerTotalScores[playerActive]);
  //TODO check the TOTAL score is above / equal to 100
  //TODO if not switch player
});
