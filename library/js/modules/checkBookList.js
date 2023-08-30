const checkBookList = (localStorageData) => {
  document.querySelectorAll('.tab-item__btn').forEach(elem => elem.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('btn clicked');
    setDisabled(elem);
    localStorageData.countBook += 1;
    
    localStorage.setItem('newLibraryUser', JSON.stringify(localStorageData));
  }));
};

function setDisabled(elem) {
  elem.textContent = 'Own';
  elem.classList.add('tab-item__btn--disabled');
  elem.setAttribute('disabled', '');
}

export default checkBookList;