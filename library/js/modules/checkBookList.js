const checkBookList = (localStorageData) => {





  document.querySelectorAll('.tab-item__btn').forEach(elem => elem.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('btn clicked');
    let content = elem.parentNode.querySelector('.tab-item__title').textContent.replace(/\s{2,}/g, '');
    console.log(content);
    


    let arr = [];

    localStorageData.bookList.forEach((item) => {
      console.log(item['book']);
      arr.push(item);
    });

    if (arr.indexOf(content) == -1) {
      console.log('plus')
      setDisabled(this);
      let newBook = {
        id: 5,
        book: content
      }
      localStorageData.countBook += 1;
      localStorageData['bookList'].push(newBook);
      localStorage.setItem('newLibraryUser', JSON.stringify(localStorageData));
      location.reload();
  } else {
    return;
  }
  //   if (item['book'].indexOf(content) == -1) {
  //     console.log('plus')
  //     setDisabled(this);
  //     let newBook = {
  //       id: i,
  //       book: content
  //     }
  //     localStorageData.countBook += 1;
  //     localStorageData['bookList'].push(newBook);
  //     localStorage.setItem('newLibraryUser', JSON.stringify(localStorageData));
  // } else {
  //   return;
  // }


    // setDisabled(elem);
    // localStorageData.countBook += 1;
    
    // localStorage.setItem('newLibraryUser', JSON.stringify(localStorageData));
  }));
};

function setDisabled(elem) {
  elem.textContent = 'Own';
  elem.classList.add('tab-item__btn--disabled');
  elem.setAttribute('disabled', '');
}

export default checkBookList;