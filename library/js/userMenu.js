const userMenu = () => {
  function setUserMenu () {
    const trigger = document.querySelector('.user-nav');
    const authPopup = document.querySelector('.popup-auth__inner');
  
    const bottomPoint = trigger.getBoundingClientRect().bottom;
    const widthPopup = authPopup.getBoundingClientRect().width;
    const rightPoint = document.body.clientWidth - trigger.getBoundingClientRect().right;
  
    authPopup.style.top = bottomPoint + 1 + 'px';
    
    if (document.body.clientWidth  <= 484) {
     authPopup.style.right = rightPoint - widthPopup + trigger.getBoundingClientRect().width + 'px';
    } else {
      authPopup.style.right = rightPoint + 'px';
    }
  }
  setUserMenu();
};

export default userMenu;