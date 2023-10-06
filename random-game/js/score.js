import { createScoreRow } from "../main.js";
const scoreTable = () => {
  const btn = document.querySelector('.table-score__btn');
  const scoreList = document.querySelector('.table-score__list');


  btn.addEventListener('click', () => {
    scoreList.classList.toggle('table-score__list--active');
    document.querySelector('.overlay-score').classList.toggle('overlay-score--active');
    if (scoreList.classList.contains('table-score__list--active')) {
      createScoreRow()
    }
  });



};

export default scoreTable;