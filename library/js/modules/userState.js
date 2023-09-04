import modals from "./modals.js";
import { setFormValidation, validation, checkCondition, cleanForm } from "./validation.js";
import userMenu from "./userMenu.js";
import createUserPopup from "./userPopup.js";
import validationAuth from "./validationAuth.js";
import copyData from "./copyData.js";
import cardRender from "./cardRender.js";
import checkCard from "./checkCard.js";
import checkBookList from "./checkBookList.js";


const userState = () => {
  let key = JSON.parse(localStorage.getItem('newLibraryUser'));

  const profilePopup = document.querySelector('.popup-auth');
  const userProfile = document.querySelector('.user-nav__link');
  let userLogo;

  if (key === null) {
  modals('.user-nav', '.popup-auth', '.popup-auth', 'user-nav--active');
  modals('.popup-auth__link-login', '.popup-login', '.popup-login__close', 'popup--active');
  modals('.popup-auth__link-register', '.popup-register', '.popup-register__close', 'popup--active');
  modals('.popup-login__link', '.popup-register', '.popup-register__close', 'popup--active');
  modals('.popup-register__link', '.popup-login', '.popup-login__close', 'popup--active');
  modals('.tab-item__btn', '.popup-login', '.popup-login__close', 'popup--active');
  modals('.card__auth-logIn', '.popup-login', '.popup-login__close', 'popup--active');
  modals('.card__auth-signUp', '.popup-register', '.popup-register__close', 'popup--active');
  validationAuth('.popup-login__form');
  validation('.popup-register__form');

  //Нажатие на кнопку Check the card ни к чему не приведёт
  document.querySelector('.card__holder-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  }

  try {
    if (key.isRegistred === 'true' && key.isAuth === 'true') {
      
    //menu after login
    profilePopup.innerHTML = `<div class="popup-auth__inner">
    <div class="popup-auth__content">
      <h5 class="popup-auth__title">${key.userID}</h5>
      <a class="popup-auth__link-login popup-auth__link-profile" href="#">My profile</a>
      <a class="popup-auth__link-logout" href="#">Log Out</a>
    </div>
    </div>`;
    userMenu();

    //check userLogo if user is register
    userLogo = key.firstName[0].toUpperCase() + key.lastName[0].toUpperCase();
    userProfile.innerHTML = `
      <span class="user-nav__link-isRegister">${userLogo}</span>
    `;

    //add title for user icon
    document.querySelector('.user-nav__link-isRegister').setAttribute('title', `${key.firstName} ${key.lastName}`)
    
    //create User's profile
    createUserPopup(userLogo, key.firstName, key.lastName, key.visits, key.countBook, key.userID, key.bookList);
    modals('.popup-auth__link-profile', '.popup-profile', '.popup-profile__close', 'popup--active');

    // copy userID number at clipBoard
    copyData('.popup-profile__copy', '.popup-profile__card-number');

    //change card section for login user
    cardRender(key.firstName, key.lastName, key.userID, key.visits, key.countBook);

    //open user menu on btn click at card section
    modals('.popup-profile-btn', '.popup-profile', '.popup-profile__close', 'popup--active');

    modals('.user-nav', '.popup-auth', '.popup-auth', 'user-nav--active');

      // Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1
      document.querySelector('.popup-auth__link-logout').addEventListener('click', (e) => {
        e.preventDefault();
        key.isAuth = 'false';
        localStorage.setItem('newLibraryUser', JSON.stringify(key));
        location.reload();
      })

    }
  } catch(e) {}


  try {
    if (key.isRegistred === 'true' && key.isAuth === 'true' && key.hasCard === 'false') {
      modals('.tab-item__btn', '.popup-buy', '.popup-buy__close', 'popup--active');
      const popUpForm  = document.querySelector('.popup-buy__form')
      popUpForm.addEventListener('click', (e) => {
        e.preventDefault();
        let error = setFormValidation(popUpForm);
        popUpForm.querySelectorAll('input').forEach(elem => elem.addEventListener('keyup', () => {
          checkCondition(elem);
        }));
        if (error !== false) {
        } else {
          key.hasCard = 'true';
          localStorage.setItem('newLibraryUser', JSON.stringify(key));
          setTimeout(() => {
            cleanForm(popUpForm);
          }, 1000);
        }
      })
  }
  } catch(e) {}


  try {
    if (key.isRegistred === 'true' && key.isAuth === 'true' && key.hasCard === 'true') {
      
      //check localStorage for bookList
      let arr = [];
      key.bookList.forEach((item) => {
        arr.push(item['book']);
      });

      document.querySelectorAll('.tab-item__btn').forEach(elem => {
        let content = elem.parentNode.querySelector('.tab-item__title').textContent.trim().replace(/\s{2,}/, ' ');
        if (arr.indexOf(content) !== -1) {
          setDisabled(elem);
          userMenu();
      }});
      checkBookList(key);
    }  
  } catch(e) {}


  function setDisabled(elem) {
    elem.textContent = 'Own';
    elem.classList.add('tab-item__btn--disabled');
    elem.setAttribute('disabled', '');
  }


  try {
    if (key.isRegistred === 'true' && key.isAuth === 'false') {

      profilePopup.innerHTML = `<div class="popup-auth__inner">
      <div class="popup-auth__content">
        <h5 class="popup-auth__title">Profile</h5>
        <a class="popup-auth__link-login" href="#">Log In</a>
        <a class="popup-auth__link-register" href="#">Register</a>
      </div>
      </div>`;
      userMenu();

      modals('.user-nav', '.popup-auth', '.popup-auth', 'user-nav--active');
      modals('.popup-auth__link-login', '.popup-login', '.popup-login__close', 'popup--active');
      modals('.popup-auth__link-register', '.popup-register', '.popup-register__close', 'popup--active');
      modals('.popup-login__link', '.popup-register', '.popup-register__close', 'popup--active');
      modals('.popup-register__link', '.popup-login', '.popup-login__close', 'popup--active');
      modals('.tab-item__btn', '.popup-login', '.popup-login__close', 'popup--active');
      modals('.card__auth-logIn', '.popup-login', '.popup-login__close', 'popup--active');
      modals('.card__auth-signUp', '.popup-register', '.popup-register__close', 'popup--active');
      validation('.popup-register__form');
      
      //check userLogo if user is register
      userProfile.innerHTML = `<a class="user-nav__link" href="#">
      <img class="user-nav__img" src="assets/icons/user.svg" alt="user icon">
      </a>`;

      //check user's auth
      validationAuth('.popup-login__form');
      validationAuth('.tab-item__btn');

      // Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то 
      // отображается панель с информацией, вместо кнопки Check the card на 10 секунд
      checkCard('.card__holder-form', '.holder__input-name', '.holder__input-card', key);
    }
  } catch(e) {}
};

export default userState;