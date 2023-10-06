const score = document.querySelector('.score');
let countScore = 0;
score.textContent = countScore;

export default function increaseAttempts() {
  countScore += 1;
  score.textContent = countScore;
}