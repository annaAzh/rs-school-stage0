const changeDots = () => {

  const changeDots = () => {
    const dots = document.querySelectorAll('.slider__dot');

    if (document.body.clientWidth >= 320 && document.body.clientWidth <= 768) {
      dots.forEach(elem => elem.style.display = 'block');
    }

    if (document.body.clientWidth > 768 && document.body.clientWidth <= 1020) {
      dots[4].style.display = 'none';
      dots[3].style.display = 'block';
    }

    if (document.body.clientWidth > 1020) {
      dots[4].style.display = 'none';
      dots[3].style.display = 'none';
    }
  }

  window.addEventListener('resize', changeDots);

};

export default changeDots;