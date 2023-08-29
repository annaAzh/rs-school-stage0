import userID from "./userID.js";


export function validation (formSelector) {

  const form = document.querySelector(formSelector);

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let error = setFormValidation(this);
    console.log(error)
  
    form.querySelectorAll('input').forEach(elem => elem.addEventListener('keyup', () => {
      checkCondition(elem);
    }));

    const firstName = form.querySelector('#name');
    const lastName = form.querySelector('#surname');
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    const userId = userID();
    const visit = 1;
    const countBook = 0; 


    if (error !== false) {
      console.log('error')
    } else {
      console.log('You are registred');
      setLocalStorage(firstName, lastName, email, password, userId, visit, countBook);
      console.log(JSON.parse(localStorage.getItem('newLibraryUser')));
      setTimeout(() => {
        cleanForm(form);
      }, 1000);
    }

  });

  
};

export function cleanForm(form) {
  form.reset();
  form.parentNode.parentNode.parentNode.classList.remove('popup--active');
  document.body.classList.remove('noscroll');
  //add popup - user has been registred
  location.reload();
}

export function setFormValidation(currentForm) {
  const inputs = currentForm.querySelectorAll('input');
 let error;
  inputs.forEach(elem =>  {
    error = checkCondition(elem);
  });
  return error;
}

function checkCondition(elem) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let error;

    if (elem.value === '') {
      formAddError(elem);
      error = true;
    } else {
      formRemoveError(elem);
      error = false;
    }

    if (elem.dataset.maxlength) {
      if (elem.value.length < elem.dataset.maxlength) {
        formAddError(elem);
        error = true;
      } else {
        formRemoveError(elem);
        error = false;
      }
    }

    if (elem.dataset.login) {
      if (elem.value !== '' || elem.value.match(emailPattern)) {
        formRemoveError(elem);
        error = false;
      } else {
        formAddError(elem);
        error = true;
      }
    }

    if (elem.dataset.email) {
      if (!elem.value.match(emailPattern)) {
        formAddError(elem);
        error = true;
      } else {
        formRemoveError(elem);
        error = false;
      }
    }
    // check Bank card number for length - 16 digits
    const numberPattern = /\d/g;
    if (elem.dataset.length) {
      if (elem.value.length === 16 && elem.value.match(numberPattern)) {
        formRemoveError(elem);
        error = false;
      }
      else {
        formAddError(elem);
        error = true;
      }
    }

    //check max length and type number for Expiration code
    if (elem.dataset.maxchars) {
      if (elem.value.match(/\d/) && elem.value.length === 2) {
        formRemoveError(elem);
        error = false;
      } else {
        formAddError(elem);
        error = true;
      }
    }

    
    //check cvc input for length 3 and for type - number
    if (elem.dataset.cvc) {
      if (elem.value.length === 3 && elem.value.match(/\d/)) {
        formRemoveError(elem);
        error = false;
      } else {
        formAddError(elem);
        error = true;
      }
    }
  return error;
}

export function formAddError(input) {
input.parentElement.classList.add('_error');
input.classList.add('_error');
input.parentNode.querySelector('.input__error').classList.add('input__error-show');
}

export function formRemoveError(input) {
input.parentElement.classList.remove('_error');
input.classList.remove('_error');
input.parentNode.querySelector('.input__error').classList.remove('input__error-show');
}


function setLocalStorage(firstName, lastName, email, password, userId, visit = 1, countBook) {
  let user = {
    isRegistred: 'true',
    isAuth: 'true',
    login: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    userID: userId,
    visits: visit,
    countBook: countBook
  };

  let userObj = JSON.stringify(user);

  localStorage.setItem('newLibraryUser', userObj);
}


