import modals from "./auth.js";
import {setValidation, validation, cleanForm, formAddError, formRemoveError} from "./validation.js";
import copyData from "./copyData.js";
import userMenu from "./userMenu.js";


const checkUser = () => {

  const form = document.querySelector('.popup-buy__form');

  // get data from localStorage
  let key = JSON.parse(localStorage.getItem('newLibraryUser'));
  console.log(key)

  //add title for user icons with full name and surname
  if (key) {
    if (key.isRegistred && key.isLogin) {
      document.querySelector('.user-nav__link-isRegister').setAttribute('title', `${key.login} ${key.lastName}`)
    }
  }

  //change user menu pozition at the window(under right User's icon corner)
  if (key) {
    if (key.isRegistred) {
      userMenu();
    }
  }

  //check books btn (if registred  - buy card)
  if (key) {
    if (key.isRegistred && key.isLogin && !key.hasCard) {
      modals('.tab-item__btn', '.popup-buy', '.popup-buy__close', 'popup--active');
  
     

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        let error = setValidation(this);
  
        form.querySelectorAll('input').forEach(elem => elem.addEventListener('keyup', () => {
          setValidation(form);
        }));
        // setValidation(this);
       
        // setTimeout(() => {
        //   // cleanForm(this);
        // }, 1000);


        if (error !== 'true') {
          key.hasCard = 'true';
          localStorage.setItem('newLibraryUser', JSON.stringify(key));
    
          setTimeout(() => {
            cleanForm(form);
          }, 1000); 
        } else {
          return;
        }
        
      });
  
    }
  } 
  else {
    modals('.tab-item__btn', '.popup-login', '.popup-login__close', 'popup--active');
    // validation('.popup-login__form');
  }



  //click on book btn and buy book
  if (key) {
    if (key.isRegistred && key.hasCard) {
      const bookBtn = document.querySelectorAll('.tab-item__btn');
      let arr = [];

      bookBtn.forEach(elem => elem.addEventListener('click', (e) => {
        e.preventDefault();
        let content = elem.parentNode.querySelector('.tab-item__title').textContent.replace(/\s{2,}/g, '');
        let key = JSON.parse(localStorage.getItem('newLibraryUser'));
        arr.push(content);
        key['book'] = arr;
        key.countBook += 1;
        localStorage.setItem('newLibraryUser', JSON.stringify(key));

        setDisabled(elem);

        // key['book'].forEach(item => {
        //   if (item.indexOf(content) != -1) {
        //     console.log('plus')
        //     setDisabled(elem);
        // }
        // });

      }));


      function setDisabled(elem) {
        elem.textContent = 'Own';
        elem.classList.add('tab-item__btn--disabled');
        elem.setAttribute('disabled', '');
      }
    }
  }

  //copy userID to clipboard
  if (key) {
    if (key.isRegistred && key.isLogin) {
      try {
        copyData('.popup-profile__copy', '.popup-profile__card-number');
      } catch(e) {}
    }
  }



};


export default checkUser;