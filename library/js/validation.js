import userID from "./userID.js";

export function validation (formSelector) {

  const form = document.querySelector(formSelector);

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let error = setValidation(this);
  
    form.querySelectorAll('input').forEach(elem => elem.addEventListener('keyup', () => {
      setValidation(form);
    }));


    const firstName = form.querySelector('#name');
    const lastName = form.querySelector('#surname');
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    const userId = userID();
    const visit = 1;
    const countBook = 0;

    if (error !== 'true') {
      setLocalStorage(firstName, lastName, email, password, userId, visit, countBook);

      setTimeout(() => {
        cleanForm(form);
      }, 1000); 
    } else {
      return;
    }
  });

  
};

export function cleanForm(form) {
  form.reset();
  form.parentNode.parentNode.parentNode.classList.remove('popup--active');
  document.body.classList.remove('noscroll');
  location.reload();
}

export function setValidation(currentForm) {
  const inputs = currentForm.querySelectorAll('input');

  inputs.forEach(elem =>  {
    checkCondition(elem);
  });
}

function checkCondition(elem) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let error;

    if (elem.value === '') {
      formAddError(elem);
      error = true;
    } else {
      formRemoveError(elem);
    }

    if (elem.dataset.maxlength) {
      if (elem.value.length < elem.dataset.maxlength) {
        formAddError(elem);
        error = true;
      } else {
        formRemoveError(elem);
      }
    }

    if (elem.dataset.login) {
      if (elem.value !== '' || elem.value.match(emailPattern)) {
        formRemoveError(elem);
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
      }
    }
    // check Bank card number for length - 16 digits
    const numberPattern = /\d/g;
    if (elem.dataset.length) {
      if (elem.value.length === 16 && elem.value.match(numberPattern)) {
        formRemoveError(elem);
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
      } else {
        formAddError(elem);
        error = true;
      }
    }

    
    //check cvc input for length 3 and for type - number
    if (elem.dataset.cvc) {
      if (elem.value.length === 3 && elem.value.match(/\d/)) {
        formRemoveError(elem);
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
    isLogin: 'true',
    login: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    userID: userId,
    visits: visit,
    countBook: 0
  };

  let userObj = JSON.stringify(user);

  localStorage.setItem('newLibraryUser', userObj);
}


