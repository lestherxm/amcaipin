document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const navList = document.querySelector('.nav__list');
  const navIcon = toggleButton.querySelector('img');

  let menuOpen = false;

  toggleButton.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navList.style.transform = menuOpen ? 'translate(0)' : 'translate(-100%)';
    navIcon.src = menuOpen
      ? './assets/icons/menu-close.svg'
      : './assets/icons/menu-open.svg';
  });
});