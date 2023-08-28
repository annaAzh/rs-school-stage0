import checkUser from "./checkUser.js";
import userProfile from "./userProfile.js";

const logOut = () => {

  let key = JSON.parse(localStorage.getItem('newLibraryUser'));
  if (key.isLogin && key.isRegistred) {
    document.querySelector('.popup-auth__link-logout').addEventListener('click', () => {
      console.log('log out');
      key.isLogin = 'false';
      localStorage.setItem('newLibraryUser', JSON.stringify(key));
      checkUser();
      userProfile();
      location.reload();
    });


  }

};

export default logOut;