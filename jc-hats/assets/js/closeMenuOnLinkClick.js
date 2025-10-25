document.addEventListener('DOMContentLoaded', () => {
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');
  const toggleButton = document.getElementById('menu-toggle');
  const navIcon = toggleButton.querySelector('img');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Ocultar el menú
      navList.style.transform = 'translate(-100%)';
      // Cambiar icono del botón
      navIcon.src = './assets/icons/menu-open.svg';
    });
  });
});