import burger from "./modules/burger.js";
import changeDots from "./modules/dots.js";
import slider from "./modules/slider.js";
import setTabs from "./modules/tabs.js";
import stickyTab from "./modules/stickyTab.js";
import userMenu from "./modules/userMenu.js";
import userState from "./modules/userState.js";

// window.addEventListener('resize', () => {
//   window.location.reload();
// });

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  console.log(' Вёрстка валидная +10 \n Вёрстка семантическая +16 \n Вёрстка соответствует макету +54 \n Общие требования к верстке +20 \n ');
  console.log(' Вёрстка соответствует макету. Ширина экрана 768px +26 \n блок <header> +2\n секция Welcome +2\n секция About +4. \n секция Favorites+2 \n Сделать кнопку own, вместо buy для последней книги. +2 \n секция CoffeShop +4\n секция LibraryCard +4 \n блок <footer> + 2 \n секция Contacts +4\n \n Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 \n \n На ширине экрана 768рх реализовано адаптивное меню +12 \n\n Оценка за задание 50 баллов');
  console.log(' Этап 1: Пользователь не зарегистрирован\n Этап 2: Пользователь на этапе регистрации\n Этап 3: Пользователь на этапе входа в учётную запись после регистрации.\n Этап 4: Пользователь после входа в учётную запись\n\n Oценка за задание 200 баллов')
  burger();
  changeDots();
  slider();
  setTabs();
  stickyTab();
  userMenu();
  userState();
});