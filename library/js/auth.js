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
    popups.forEach(elem => {
      elem.classList.remove(active);
      document.body.classList.remove('noscroll');
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