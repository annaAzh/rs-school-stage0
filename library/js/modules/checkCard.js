const checkCard = (formSelector, NameSelector, CardSelector, localStorageData) => {
  const form =  document.querySelector(formSelector);
  const inputName = document.querySelector(NameSelector);
  const inputCard = document.querySelector(CardSelector);
  
  form.addEventListener('submit' , (e) => {
    e.preventDefault();
    if (inputName.value !== '' && inputCard.value !== '') {
      if (inputName.value === `${localStorageData.firstName} ${localStorageData.lastName}` && inputCard.value === localStorageData.userID) {

        document.querySelector('.card__holder-form').innerHTML = `
          <div class="holder__inner">
            <h3 class="holder__title">Brooklyn Public Library</h3>
            <input class="holder__input holder__input-name" type="text" placeholder="Reader's name" value="${localStorageData.firstName} ${localStorageData.lastName}" readonly>
            <input class="holder__input holder__input-card" type="text" placeholder="Card number" value="${localStorageData.userID}" readonly>
          </div>
          <div class="popup-profile__stat">
          <div class="popup-profile__visits">
          <span class="popup-profile__visits-span">Visits</span>
          <img src="assets/icons/visits.svg" alt="visits">
          <span id="visits">${localStorageData.visits}</span>
          </div>
          <div class="popup-profile__bonuses">
            <span class="popup-profile__bonuses-span">Bonuses</span>
            <img src="assets/icons/bonuses.svg" alt="bonuses">
            <span id="bonuses">1240</span>
          </div>
          <div class="popup-profile__books">
            <span class="popup-profile__books-span">Books</span>
            <img src="assets/icons/book.svg" alt="books">
            <span id="books">${localStorageData.countBook}</span>
          </div>
          </div>
        `;

        setTimeout(() => {
          document.querySelector('.card__holder-form').innerHTML = `
          <div class="holder__inner">
            <h3 class="holder__title">Brooklyn Public Library</h3>
            <input class="holder__input holder__input-name" type="text" placeholder="Reader's name" required>
            <input class="holder__input holder__input-card" type="text" placeholder="Card number" required>
          </div>
          <div class="card__holder-btn">
            <button class="holder__btn" type="submit">Check the card</button>
          </div>
          `;
        }, 10000);
      }
    }
  })
};

export default checkCard;