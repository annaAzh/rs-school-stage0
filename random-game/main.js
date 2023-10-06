import data from './data.js';

const score = document.querySelector('.score');
let countScore = 0;
score.textContent = countScore;

const field = document.querySelector('.field');

const shuffledArray = data.sort(() => Math.random() -0.5);
for (let i = 0; i < shuffledArray.length; i++) {
  const element = document.createElement('img');
  element.classList.add('card');
  element.src = './assets/image/blank.png';
  element.setAttribute('data-id', i);
  element.setAttribute('alt', 'card');
  field.append(element);
}