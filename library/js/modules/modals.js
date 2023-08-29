const modals = (triggerSelector, modalSelector, closeSelector, active) => {
  const trigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);
  const popups = document.querySelectorAll('[data-modal]');

  trigger.forEach(elem => {
    elem.addEventListener('click', (e) => {
    if (e.target) {
      e.preventDefault();
    }
    //then open popup => other should be closed
    popups.forEach(elem => {
      elem.classList.remove(active);
      document.body.classList.remove('noscroll');
      //close burdger
      document.querySelector('.header-top').classList.remove('header-top--active');
      document.body.classList.remove('noscroll');
      document.querySelector('.burger').classList.remove('burger--active');
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