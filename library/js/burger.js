const burger = () => {
  
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header-top');
  const menuLink = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  btn.addEventListener('click', () => {
    header.classList.toggle('header-top--active');
    document.body.classList.toggle('noscroll');
    btn.classList.toggle('burger--active');
    if (header.matches('.header-top--active')) {
      overlay.classList.add('shown');
      overlay.classList.remove('hide');
    } else {
      overlay.classList.remove('shown');
      overlay.classList.add('hide');
    }

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