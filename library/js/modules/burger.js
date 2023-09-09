const burger = () => {
  
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header-top');
  const menuLink = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');
  const popups = document.querySelectorAll('[data-modal]');

  btn.addEventListener('click', () => {
    header.classList.toggle('header-top--active');
    document.body.classList.add('noscroll');
    btn.classList.toggle('burger--active');

    if (header.matches('.header-top--active')) {
      overlay.classList.add('shown');
      overlay.classList.remove('hide');
    } else {
      overlay.classList.remove('shown');
      overlay.classList.add('hide');
    }

    //then open popup => other should be closed
    popups.forEach(elem => {
      console.log(elem)
      if (elem.classList.contains('user-nav--active')) {
        elem.classList.remove('user-nav--active');
        document.body.classList.remove('noscroll');
      }
      if (elem.classList.contains('popup--active')) {
        elem.classList.remove('popup--active');
        document.body.classList.remove('noscroll');
      }  
    })
    document.querySelector('.popup-profile').classList.remove('popup--active');
  });

  menuLink.forEach(elem => {
    elem.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    header.classList.remove('header-top--active');
    document.body.classList.remove('noscroll');
    btn.classList.remove('burger--active');
  }

  overlay.addEventListener('click', () => {
    closeMenu();
    overlay.classList.remove('shown');
    overlay.classList.add('hide');
  });

}

export default burger;