const navMenu = document.querySelector('.nav__menu');
const openMenuButton = document.querySelector('.nav__button-open');
const closeMenuButton = document.querySelector('.nav__button-close');

openMenuButton.addEventListener('click', e => {
  e.preventDefault();
  navMenu.classList.add('nav__menu--open');
});

closeMenuButton.addEventListener('click', e => {
  e.preventDefault();
  navMenu.classList.remove('nav__menu--open');
});
