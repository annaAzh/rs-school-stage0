import userMenu from "./userMenu.js";

const checkBookList = (localStorageData) => {

  document.querySelectorAll('.tab-item__btn').forEach(elem => elem.addEventListener('click', function (e) {
    e.preventDefault();

    let content = elem.parentNode.querySelector('.tab-item__title').textContent.trim().replace(/\s{2,}/, ' ');
    
    let arr = [];

    localStorageData.bookList.forEach((item) => {
      arr.push(item);
    });

    if (arr.indexOf(content) == -1) {
      setDisabled(this);
      let newBook = {
        id: 5,
        book: content
      }
      localStorageData.countBook += 1;
      localStorageData['bookList'].push(newBook);
      localStorage.setItem('newLibraryUser', JSON.stringify(localStorageData));
      userMenu();
  } else {
    return;
  }
  }));
};

function setDisabled(elem) {
  elem.textContent = 'Own';
  elem.classList.add('tab-item__btn--disabled');
  elem.setAttribute('disabled', '');
}

export default checkBookList;