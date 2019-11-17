const hamburger = document.querySelector('.navigation__hamburger');
const menu = document.querySelector('.navigation__list');

const activeHamburger = () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('navigation__list--active');
}

hamburger.addEventListener('click', activeHamburger);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('navigation__list--active');
        hamburger.classList.remove('hamburger--active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    });
});