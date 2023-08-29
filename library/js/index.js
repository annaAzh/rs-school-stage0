import burger from "./modules/burger.js";
import changeDots from "./modules/dots.js";
import slider from "./modules/slider.js";
import setTabs from "./modules/tabs.js";
import stickyTab from "./modules/stickyTab.js";
import userMenu from "./modules/userMenu.js";
import userState from "./modules/userState.js";

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
  // console.log('test')
  // let users = [];
  // let user = {
  //   name: 'Ann',
  //   sur: 'AAAA'
  // }
  // users.push(user);
  // let user2 = {
  //   name: 'NNN',
  //   sur: 'OOOO'
  // }
  // users.push(user2);
  // localStorage.setItem('test', JSON.stringify(users));
  // let t = JSON.parse(localStorage.getItem('test'))
  // for (let item of t) {
  //   console.log(item.name)
  // }
  

  userState();

  console.log('mistake')

  


});