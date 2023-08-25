import modals from "./auth.js";
import {setValidation, validation, cleanForm, formAddError, formRemoveError} from "./validation.js";

const checkUser = () => {

  const form = document.querySelector('.popup-buy__form');
  // get data from localStorage
  let key = JSON.parse(localStorage.getItem('newLibraryUser'));
  console.log(key)



  if (key) {
    if (key.isRegistred) {
      modals('.tab-item__btn', '.popup-buy', '.popup-buy__close', 'popup--active');
    



      form.addEventListener('submit', function(e) {
        e.preventDefault();
        setValidation(this);
        key.hasCard = 'true';
        localStorage.setItem('newLibraryUser', JSON.stringify(key));
          
        setTimeout(() => {
          // cleanForm(this);
        }, 1000);
        
      });
  
    }
  } else {
    modals('.tab-item__btn', '.popup-login', '.popup-login__close', 'popup--active');
    validation('.popup-login__form');
  }

};


export default checkUser;