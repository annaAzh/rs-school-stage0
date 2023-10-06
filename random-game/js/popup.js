const popup = () => {
  document.querySelector('.overlay').addEventListener('click', (e) => {
    if (e.target) {
      hidePopup();
    }
  })
}

function createPopup(text) {
  const element =  document.createElement('div');
  element.classList.add('popup');
  element.innerHTML = `
  <div class="overlay">
    <div class="popup__inner">
      <p class="popup__text">${text}</p>
    </div>
  </div>
  `;
  document.body.prepend(element);
}

function showPopup(text) {
  document.querySelector('.popup').classList.add('popup--active');
  document.querySelector('.popup__text').textContent = text;
}

function hidePopup() {
  document.querySelector('.popup').classList.remove('popup--active');
}

export { popup, createPopup, showPopup };