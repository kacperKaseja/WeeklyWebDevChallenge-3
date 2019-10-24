const hamburger = document.querySelector('.navigation__hamburger');
const menu = document.querySelector('.navigation__list');

const activeHamburger = () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('navigation__list--active');
}

hamburger.addEventListener('click', activeHamburger);