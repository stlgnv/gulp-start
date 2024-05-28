const buttonOpenMenu = document.querySelector('.header__open-menu');
const buttonCloseMenu = document.querySelector('.header__close-menu');
const overlay = document.querySelector('.overlay');
const headerNav = document.querySelector('.header__nav');

buttonOpenMenu.addEventListener ('click', () => {
    headerNav.classList.add('header__nav--showed');
    overlay.classList.add('overlay--showed');
    buttonCloseMenu.classList.remove('header__close-menu--hidden');
    buttonOpenMenu.classList.add('header__open-menu--hidden');
    buttonCloseMenu.addEventListener('click', closeMenu);
})

const closeMenu = () => {
    headerNav.classList.remove('header__nav--showed');
    overlay.classList.remove('overlay--showed');
    buttonCloseMenu.classList.add('header__close-menu--hidden');
    buttonOpenMenu.classList.remove('header__open-menu--hidden');
    buttonCloseMenu.removeEventListener('click', closeMenu);
}
