const createUserPopup = (shortName, firstName, lastName, visits, books, userNumber, bookTitle) => {
  let arr = []
  bookTitle.forEach(item => arr.push(item.book));

  const element = document.createElement('div');
  element.innerHTML = `
  <div class="popup-profile__inner">
    <div class="popup-profile__close">
    <img class="popup-profile__close-img" src="assets/icons/close.svg" alt="close button">
    </div>
    <div class="popup-profile__content">
    <div class="popup-profile__column">
    <div class="popup-profile__logo-box">
      <p class="popup-profile__user-name">${shortName}</p>
    </div>
    <div class="popup-profile__name-box">
      <p class="popup-profile__full-name">${firstName}</p>
      <p class="popup-profile__full-name">${lastName}</p>
    </div>
  </div>
  <div class="popup-profile__column">
    <h3 class="popup-profile__title">My profile</h3>
    <div class="popup-profile__stat">
      <div class="popup-profile__visits">
        <span class="popup-profile__visits-span">Visits</span>
        <img src="assets/icons/visits.svg" alt="visits">
        <span id="visits">${visits}</span>
      </div>
      <div class="popup-profile__bonuses">
        <span class="popup-profile__bonuses-span">Bonuses</span>
        <img src="assets/icons/bonuses.svg" alt="bonuses">
        <span id="bonuses">1240</span>
      </div>
      <div class="popup-profile__books">
        <span class="popup-profile__books-span">Books</span>
        <img src="assets/icons/book.svg" alt="books">
        <span id="books">${books}</span>
      </div>
    </div>
    <h5 class="popup-profile__subtitle">Rented books</h5>
    <div class="popup-profile__scroll">
    <ul class="popup-profile__list">
    </ul>
    </div>
    <div class="popup-profile__card">
      Card number
      <span class="popup-profile__card-number">${userNumber}</span>
      <button class="popup-profile__copy">
        <img class="popup-profile__copy-img" src="assets/icons/copy.svg" alt="copy image">
      </button>
    </div>
  </div>
    </div>
  </div>
  `;
  element.classList.add('popup-profile');
  document.querySelector('.wrapper').append(element);
  element.setAttribute('data-modal', '');
  arr.forEach(title => {
    const bookElement = document.createElement('li');
    bookElement.innerHTML = `
      <a class="popup-profile__link" href="#">
        ${title}
      </a>
    `;
    bookElement.classList.add('popup-profile__item');
    document.querySelector('.popup-profile__list').append(bookElement);
  })

  return element;
};

export default createUserPopup;