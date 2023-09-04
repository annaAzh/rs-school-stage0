const setTabs = () => {
  const tabsParent = document.querySelector('.inputs__box');
  const tabsContent = document.querySelectorAll('.tab__items');
  const tabs = document.querySelectorAll('input[name = season]');

  function hideTabs() {
    tabs.forEach(elem => {
      elem.classList.remove('label__name--active');
    });
    tabsContent.forEach(elem => {
      elem.classList.add('fade');
      elem.style.display = 'none';
    });
  }

  function showTabs(i = 0) {
    tabs[i].classList.add('label__name--active');
    tabsContent[i].classList.add('fade-in');
    tabsContent[i].style.display = 'grid';
  }

  hideTabs();
  showTabs();

  //add listener on parent and write conditions for element what has been pressed
  tabsParent.addEventListener('change', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('input')) {
      tabs.forEach((elem, i) => {
          if ( target == elem) {
              hideTabs();
              showTabs(i);
          }
      });  
    }
  });
};

export default setTabs;
