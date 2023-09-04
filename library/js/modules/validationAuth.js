const validationAuth = (formSelector) => {
  const form = document.querySelector(formSelector);

  form.addEventListener('click', (e) => {
    e.preventDefault();

    const logInInput = form.querySelector('#login');
    const passwordInput = form.querySelector('#passwordAuth');

    let key = JSON.parse(localStorage.getItem('newLibraryUser'));

    if (key.password === passwordInput.value) {
      if (key.email === logInInput.value || key.userID === logInInput.value) {
        key.isAuth = 'true';
        key.visits += 1;
        localStorage.setItem('newLibraryUser', JSON.stringify(key));
        setTimeout(() => {
          cleanForm(form);
        }, 1000);
      }
    }
  });
};

export function cleanForm(form) {
  form.reset();
  form.parentNode.parentNode.parentNode.classList.remove('popup--active');
  document.body.classList.remove('noscroll');
  location.reload();
}

export default validationAuth;