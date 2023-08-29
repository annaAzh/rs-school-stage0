import modals from "./modals.js";
import { validation } from "./validation.js";
import userMenu from "./userMenu.js";
import createUserPopup from "./userPopup.js";
import validationAuth from "./validationAuth.js";

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
  modals('.card__auth-signUp', '.popup-login', '.popup-login__close', 'popup--active');
  modals('.card__auth-logIn', '.popup-register', '.popup-register__close', 'popup--active');
  // validation('.popup-login__form');
  validationAuth('.popup-login__form');
  validation('.popup-register__form');

//Нажатие на кнопку Check the card ни к чему не приведёт
  document.querySelector('.card__holder-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('nothing.please login')
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

  //create User's profile
    createUserPopup(userLogo, key.firstName, key.lastName, key.visits, key.ountBook, key.userID);
    modals('.popup-auth__link-profile', '.popup-profile', '.popup-profile__close', 'popup--active');

    modals('.user-nav', '.popup-auth', '.popup-auth', 'user-nav--active');
    // modals('.popup-auth__link-login', '.popup-login', '.popup-login__close', 'popup--active');
    // modals('.popup-auth__link-register', '.popup-register', '.popup-register__close', 'popup--active');
    // modals('.popup-login__link', '.popup-register', '.popup-register__close', 'popup--active');
    // modals('.popup-register__link', '.popup-login', '.popup-login__close', 'popup--active');
    modals('.tab-item__btn', '.popup-buy', '.popup-buy__close', 'popup--active');
    // modals('.card__auth-signUp', '.popup-login', '.popup-login__close', 'popup--active');
    // modals('.card__auth-logIn', '.popup-register', '.popup-register__close', 'popup--active');
    validation('.popup-buy__form');

    // Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1
    document.querySelector('.popup-auth__link-logout').addEventListener('click', (e) => {
      e.preventDefault();
      key.isAuth = 'false';
      localStorage.setItem('newLibraryUser', JSON.stringify(key));
      location.reload();
      // let key = JSON.parse(localStorage.getItem('newLibraryUser'));
      //getLocalStorage and set isAuth = 'false';
      //reload page
    })


  }
} catch(e) {}

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
    // modals('.tab-item__btn', '.popup-buy', '.popup-buy__close', 'popup--active');
    modals('.card__auth-signUp', '.popup-login', '.popup-login__close', 'popup--active');
    modals('.card__auth-logIn', '.popup-register', '.popup-register__close', 'popup--active');
    // validation('.popup-login__form');
    validation('.popup-register__form');
    
    

console.log(key);



    //check userLogo if user is register
    userProfile.innerHTML = `<a class="user-nav__link" href="#">
    <img class="user-nav__img" src="assets/icons/user.svg" alt="user icon">
    </a>`;



    //check user's auth
    validationAuth('.popup-login__form');
    validationAuth('.tab-item__btn');

    // Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то 
    // отображается панель с информацией, вместо кнопки Check the card на 10 секунд
    document.querySelector('.card__holder-form').addEventListener('submit', (e) => {
      e.preventDefault();
      (document.querySelectorAll('.card__holder-form input').forEach(input => {
        if (input.value !== '') {
          console.log('You sould made this form for 10 sec')
        }
        }))
    });


  }
} catch(e) {}

};

export default userState;