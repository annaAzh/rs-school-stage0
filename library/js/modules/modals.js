import userMenu from "./userMenu.js";

const modals = (triggerSelector, modalSelector, closeSelector, active) => {
  const trigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);
  const popups = document.querySelectorAll('[data-modal]');

  trigger.forEach(elem => {
    elem.addEventListener('click', (e) => {
    if (e.target) {
      e.preventDefault();
      if (e.target.classList.contains('popup-auth__link-profile')) {
        e.stopPropagation();
        document.querySelector('.popup-auth').classList.remove('user-nav--active');
      }
      userMenu(); 
    }
    //then open popup => other should be closed
    popups.forEach(elem => {
      if (elem.classList.contains('user-nav--active')) {
        elem.classList.remove('user-nav--active');
        document.body.classList.remove('noscroll');
      }
      if (elem.classList.contains('popup--active')) {
        elem.classList.remove('popup--active');
        document.body.classList.remove('noscroll');
      }

      if (document.querySelector('.header-top').classList.contains('header-top--active')) {
        document.querySelector('.header-top').classList.remove('header-top--active');
        document.querySelector('.burger').classList.remove('burger--active');
        document.body.classList.remove('noscroll');
      }

    })

    modal.classList.add(active);
    document.body.classList.add('noscroll');
    })
  });
  
  close.addEventListener('click', () => {
    modal.classList.remove(active);
    document.body.classList.remove('noscroll');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove(active);
      document.body.classList.remove('noscroll');
    }
  })

};

export default modals;