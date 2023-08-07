const burger = () => {
  
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header-top');
  const menuLink = document.querySelectorAll('.menu__link');

  btn.addEventListener('click', () => {
    header.classList.toggle('header-top--active');
    document.body.classList.toggle('noscroll');
    btn.classList.toggle('burger--active');
  });

  menuLink.forEach(elem => {
    elem.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    header.classList.remove('header-top--active');
    document.body.classList.remove('noscroll');
    btn.classList.remove('burger--active');
  }

}

export default burger;