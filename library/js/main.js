import burger from "./burger.js";
import changeDots from "./dots.js";
import slider from "./slider.js";
import setTabs from "./tabs.js";
import stickyTab from "./stickyTab.js";
import userMenu from "./userMenu.js";
import modals from "./auth.js";
import validation from "./validation.js";
import userProfile from "./userProfile.js";

window.addEventListener('resize', () => {
  window.location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  console.log(' Вёрстка валидная +10 \n Вёрстка семантическая +16 \n Вёрстка соответствует макету +54 \n Общие требования к верстке +20 \n ');
  console.log(' Вёрстка соответствует макету. Ширина экрана 768px +26 \n блок <header> +2\n секция Welcome +2\n секция About +4. \n секция Favorites+2 \n Сделать кнопку own, вместо buy для последней книги. +2 \n секция CoffeShop +4\n секция LibraryCard +4 \n блок <footer> + 2 \n секция Contacts +4\n \n Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 \n \n На ширине экрана 768рх реализовано адаптивное меню +12 \n\n Оценка за задание 50 баллов');
  burger();
  changeDots();
  slider();
  setTabs();
  stickyTab();
  userMenu();
    modals('.user-nav', '.popup-auth', '.popup-auth', 'user-nav--active');
    modals('.popup-auth__link-login', '.popup-login', '.popup-login__close', 'popup--active');
    
    modals('.popup-auth__link-register', '.popup-register', '.popup-register__close', 'popup--active');
    modals('.popup-login__link', '.popup-register', '.popup-register__close', 'popup--active');
    modals('.popup-register__link', '.popup-login', '.popup-login__close', 'popup--active');
    validation('.popup-login__form');
    validation('.popup-register__form');
    try {
      userProfile();
    } catch(e){}
    
});




