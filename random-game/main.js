import data from './data.js';
import { popup, createPopup, showPopup } from './js/popup.js';
import scoreTable from './js/score.js';

const score = document.querySelector('.score');
let countScore = 0;
score.textContent = countScore;
scoreTable();

const field = document.querySelector('.field');
createPopup()
showPopup('Start game');
popup();

function createCards() {
  for (let i = 0; i < data.length; i++) {
    const element = document.createElement('img');
    element.classList.add('card');
    element.src = './assets/image/blank.png';
    element.setAttribute('alt', 'card');
    field.append(element);
  }
}

createCards()
const cards = field.querySelectorAll('.card');
let shuffledArray = [];
let gameResult = [];

function createShuffledArray() {
  shuffledArray = data.sort(() => Math.random() -0.5);
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.setAttribute('data-id', i);
  }
}
createShuffledArray();


function increaseAttempts() {
  countScore += 1;
  score.textContent = countScore;
}

let openCard = [];
let cardsName = [];
let playArray = [];

field.addEventListener('click', (e) => {
  if (e.target) {
    let id = e.target.getAttribute('data-id');
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
  gameResult.push(countScore);
  setGameResult()
  showPopup('You are win!');
  setTimeout(() => {
    startNewGame()
  }, 1000);

}

function startNewGame() {
  countScore = 0;
  score.textContent = countScore;
  openCard = [];
  cardsName = [];
  playArray = [];
  createShuffledArray();
  cards.forEach(card => {
    card.classList.remove('disabled');
    card.src = './assets/image/blank.png';
  })
}

function setGameResult() {
  localStorage.setItem('gameResult', JSON.stringify( gameResult));
  createScoreRow()
}

function createScoreRow() {
  const scoreList = document.querySelector('.table-score__list');
  if (localStorage.getItem('gameResult')) {
    scoreList.textContent = '';
    const arr = JSON.parse(localStorage.getItem('gameResult'));
    arr.length > 9 ? arr.sort((a,b) => b - a).slice(0,10) : arr;
    for(let i = 0; i < arr.length; i++) {
      const score = arr[i];
      const element = document.createElement('li');
      element.classList.add('table-score__item');
      const span = document.createElement('span');
      span.classList.add('table-score__score');
      span.textContent = `Attempts - ${score}`;
      element.append(span);
      scoreList.append(element);
    }
  } else {
    return;
  }

}

export {createScoreRow};