const stickyTab = () => {
  const tabsMenu = document.querySelector('.fieldset');
  const nextTabsMenu = document.querySelector('.shop');

  window.addEventListener('scroll', setSticky);

  const startSticky = tabsMenu.offsetTop;
  const endSticky = nextTabsMenu.offsetTop;

  function setSticky() {
    if (document.body.clientWidth <= 1240) {
      if (window.scrollY >= startSticky && window.scrollY <= (endSticky - (tabsMenu.getBoundingClientRect().height))) {
        tabsMenu.classList.add('sticky', 'fade')
      } else {
        tabsMenu.classList.remove('sticky', 'fade');
      }
    }
  }
};

export default stickyTab;