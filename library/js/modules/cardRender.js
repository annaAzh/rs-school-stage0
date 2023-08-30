const cardRender = (firstName, lastName, userID, visits, books) => {
  document.querySelector('.card__inner').innerHTML = `
    <div class="card__column">
    <h3 class="card__subtitle">Your Library card</h3>
    <form class="card__holder-form holder">
      <div class="holder__inner">
        <h3 class="holder__title">Brooklyn Public Library</h3>
        <input class="holder__input holder__input-name" type="text" placeholder="Reader's name" pattern="[A-Za-z\s]+$" value="${firstName} ${lastName}" readonly>
        <input class="holder__input holder__input-card" type="text" placeholder="Card number" pattern="[0-9-\s]+$" value="${userID}" readonly>
      </div>
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
    </form>
  </div>
  <div class="card__column">
    <h4 class="card__right-subtitle">Visit your profile</h4>
    <p class="card__text">With a digital library card you get free access to the Library's wide array of digital resources including e-books, databases, educational resources, and more.</p>
    <div class="card__auth-box">
      <button class="card__auth popup-profile-btn">Profile</button>
    </div>
  </div>
  `;
}

export default cardRender;