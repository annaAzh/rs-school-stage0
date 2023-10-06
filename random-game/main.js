import data from './data.js';
import { popup, createPopup, showPopup } from './js/popup.js';

const score = document.querySelector('.score');
let countScore = 0;
score.textContent = countScore;


const field = document.querySelector('.field');
createPopup()
showPopup('Start game');
popup();

let shuffledArray = [];
function createShuffledArray() {
  shuffledArray = data.sort(() => Math.random() -0.5);
}
createShuffledArray();

for (let i = 0; i < shuffledArray.length; i++) {
  const element = document.createElement('img');
  element.classList.add('card');
  element.src = './assets/image/blank.png';
  element.setAttribute('data-id', i);
  element.setAttribute('alt', 'card');
  field.append(element);
}
function increaseAttempts() {
  countScore += 1;
  score.textContent = countScore;
}

let openCard = [];
let cardsName = [];
let playArray = [];

field.addEventListener('click', (e) => {
  if (e.target) {
    const id = e.target.getAttribute('data-id');
    e.target.src = shuffledArray[id].src;
    if (openCard.length < 3) {
      openCard.push(id);
      cardsName.push(data[id].name);
    }
    if (openCard.length === 2) {
      increaseAttempts()
      checkTwoCards();
    }   
  }
})

const cards = field.querySelectorAll('.card');

function checkTwoCards() {
  if (cardsName[0] === cardsName[1]) {
    playArray.push(cardsName[0]);
    cards[openCard[0]].classList.add('disabled');
    cards[openCard[1]].classList.add('disabled');
    openCard = [];
    cardsName = [];
    checkWin();
  } else {
    setTimeout(function() {
      cards[openCard[0]].src = './assets/image/blank.png';
      cards[openCard[1]].src = './assets/image/blank.png';
      openCard = [];
      cardsName = [];
    }, 500)
  }
}

function checkWin() {
  if (playArray.length === 6) {
      resetGame();
  } else {
    return;
  }
}

function resetGame() {
  setTimeout(() => {
    showPopup('You are win!');
    countScore = 0;
    score.textContent = countScore; 
    createShuffledArray();
    showPopup('Start game');
    openCard = [];
    cardsName = [];
    playArray = [];
  }, 1000);
}