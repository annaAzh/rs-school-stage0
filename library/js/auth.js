const authRender = () => {
  const trigger = document.querySelector('.user-nav');
  const authOverlay = document.querySelector('.popup-auth');
  const authPopup = document.querySelector('.popup-auth__inner');

  const bottomPoint = trigger.getBoundingClientRect().bottom;
  console.log(bottomPoint);
  const widthPopup = authPopup.getBoundingClientRect().width;
  const rightPoint = document.body.clientWidth - trigger.getBoundingClientRect().right;

  authPopup.style.top = bottomPoint + 1 + 'px';
  
  if (document.body.clientWidth  <= 484) {
   authPopup.style.right = rightPoint - widthPopup + trigger.getBoundingClientRect().width + 'px';
  } else {
    authPopup.style.right = rightPoint + 'px';
  }

  trigger.addEventListener('click', () => {
    openAuth();
    
    if (document.querySelector('.header-top').classList.contains('header-top--active')) {
      closeAuth()
    } else {
      return;
    }
  });

  authOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-auth')) {
      closeAuth();
    }
  });

  function openAuth() {
    authOverlay.classList.add('user-nav--active');
    document.body.classList.toggle('noscroll');
  }

  function closeAuth() {
    authOverlay.classList.remove('user-nav--active');
    document.body.classList.remove('noscroll');
  }
 
};

export default authRender;