const menuButton = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__menu');
const list = document.querySelector('.header__list');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  nav.classList.toggle('active');
  list.classList.toggle('active');
})