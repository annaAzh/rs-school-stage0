import modals from "./auth.js";
import createPopup from "./createPopup.js";

const userProfile = () => {
  let visits = 0;
  const books = 0;
  let userLogo;
  const userProfile = document.querySelector('.user-nav__link');
  const profilePopup = document.querySelector('.popup-auth');

 
  //get data from localStorage
  let key = JSON.parse(localStorage.getItem('newLibraryUser'));

  if (key.isRegistred && key.isLogin) {
    visits +=1;

    userLogo = key.login[0].toUpperCase() + key.lastName[0].toUpperCase();
  }

  //check userLogo if user is register
  if (key.isRegistred) {
    userProfile.innerHTML = `
    <span class="user-nav__link-isRegister">${userLogo}</span>
    `;
    visits = 1;
  }  else {
    userProfile.innerHTML = `<a class="user-nav__link" href="#">
    <img class="user-nav__img" src="assets/icons/user.svg" alt="user icon">
    </a>`;
  };
  //check profile popup if user is register
  if (key.isRegistred) {
    profilePopup.innerHTML = `<div class="popup-auth__inner">
    <div class="popup-auth__content">
      <h5 class="popup-auth__title">${key.userID}</h5>
      <a class="popup-auth__link-login popup-auth__link-profile" href="#">My profile</a>
      <a class="popup-auth__link-register" href="#">Log Out</a>
    </div>
    </div>`;
  }  else {
    profilePopup.innerHTML = `<div class="popup-auth__inner">
    <div class="popup-auth__content">
      <h5 class="popup-auth__title">Profile</h5>
      <a class="popup-auth__link-login" href="#">Log In</a>
      <a class="popup-auth__link-register" href="#">Register</a>
    </div>
    </div>`;
  };

  



  //create user's profile
  if (key.isRegistred) {
    createPopup(userLogo, key.login, key.surname, visits, books, key.userID);
    modals('.popup-auth__link-profile', '.popup-profile', '.popup-profile__close', 'popup--active');
  }
  


  return key;
};

export default userProfile;