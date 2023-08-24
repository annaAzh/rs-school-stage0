import userID from "./userID.js";

const validation = (formSelector) => {

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

    setTimeout(cleanForm, 1000); 
  });


  function cleanForm() {
    form.reset();
    form.parentNode.parentNode.parentNode.classList.remove('popup--active');
    document.body.classList.remove('noscroll');
    location.reload();
  }

  function setValidation(currentForm) {
    const inputs = currentForm.querySelectorAll('input');

    inputs.forEach(elem => {
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
    });
 
  }

  function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
  }

  function formRemoveError(input) {
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

    const userObj = JSON.stringify(user);

    localStorage.setItem('newLibraryUser', userObj);
  }


};

export default validation;

