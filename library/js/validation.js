import userID from "./userID.js";

export function validation (formSelector) {

  const form = document.querySelector(formSelector);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    setValidation(this);

    const firstName = form.querySelector('#name');
    const lastName = form.querySelector('#surname');
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    const userId = userID();
    setLocalStorage(firstName, lastName, email, password, userId);

    setTimeout(() => {
      cleanForm(this);
    }, 1000); 
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
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (elem.value === '') {
      formAddError(elem);
    } else {
      formRemoveError(elem);
    }

    if (elem.dataset.maxlength) {
      if (elem.value.length < elem.dataset.maxlength) {
        formAddError(elem);
      } else {
        formRemoveError(elem);
      }
    }

    if (elem.dataset.login) {
      if (elem.value !== '' || elem.value.match(emailPattern)) {
        formRemoveError(elem);
      } else {
        formAddError(elem);
      }
    }

    if (elem.dataset.email) {
      if (!elem.value.match(emailPattern)) {
        formAddError(elem);
      } else {
        formRemoveError(elem);
      }
    }
    // check Bank card number for length - 15 chars
    const numberPattern = /\d/g;
    if (elem.dataset.length) {
      if (elem.value.length === 16 && elem.value.match(numberPattern)) {
        formRemoveError(elem);
      }
      else {
        formAddError(elem);
      }
    }

    //check max length and type number for Expiration code
    if (elem.dataset.maxchars) {
      if (elem.value.match(/\d/) && elem.value.length === 2) {
        formRemoveError(elem);
      } else {
        formAddError(elem);
      }
    }

    
    //check cvc input for length 3 and for type - number
    if (elem.dataset.cvc) {
      if (elem.value.length === 3 && elem.value.match(/\d/)) {
        formRemoveError(elem);
      } else {
        formAddError(elem);
      }
    }
  });
}

export function formAddError(input) {
input.parentElement.classList.add('_error');
input.classList.add('_error');
}

export function formRemoveError(input) {
input.parentElement.classList.remove('_error');
input.classList.remove('_error');
}


function setLocalStorage(firstName, lastName, email, password, userId) {
  let user = {
    isRegistred: 'true',
    isLogin: 'true',
    login: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    userID: userId
  };

  let userObj = JSON.stringify(user);

  localStorage.setItem('newLibraryUser', userObj);
}


