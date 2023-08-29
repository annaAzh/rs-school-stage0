const slider = () => {
  const slides = document.querySelectorAll('.slider__item');
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.arrow-left');
  const nextBtn = document.querySelector('.arrow-right');
  const dotsParent = document.querySelector('.slider__dots');
  const dots = Array.from(dotsParent.children);
  let sliderWidth = slides[0].getBoundingClientRect().width + 25;

  let offset = 0;
  let counter = 0;
  nextBtn.disabled = 'true';

  prevBtn.addEventListener('click', moveLeft);
  nextBtn.addEventListener('click', moveRight);

  function moveLeft() {
    nextBtn.removeAttribute('disabled');
    offset += sliderWidth;
    if (offset > sliderWidth * (slides.length - 1)) {
      offset = sliderWidth * (slides.length - 1); 
    } 

    if (offset > sliderWidth * (slides.length - 1) - 1) {
      prevBtn.disabled = 'true';
    }

    slider.style.left = -offset + 'px';
    counter +=1;
  }

  function moveRight() {
    prevBtn.removeAttribute('disabled');

    offset -= sliderWidth;
    if (offset < 0) {
      offset = 0;
    }

    if (offset < 1) {
      nextBtn.disabled = 'true';
    }

    slider.style.left = -offset + 'px';
    counter -=1;
  }

  dotsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (!target) return;
    const currentDot = dotsParent.querySelector('.slider__dot--active');
    const targetIndex = dots.findIndex(elem => elem === target);
   
    currentDot.classList.remove('slider__dot--active');
    dots[targetIndex].classList.add('slider__dot--active');

    if (targetIndex >= counter) {
      offset = (targetIndex - 1) * sliderWidth;
      moveLeft();
    }
    if (targetIndex <= counter) {
      offset = (targetIndex + 1) * sliderWidth;
      moveRight();
    }
  });
  
};

export default slider;