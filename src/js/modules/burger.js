const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__center');
const body = document.querySelector('.body');
const link = document.querySelectorAll('.menu__link');
const btnSignIn = document.querySelector('.btn--sign-in');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-open');
    body.classList.toggle('lock');
    overlay.classList.toggle('is-active');
});

btnSignIn.addEventListener('click', () => {
    burger.classList.remove('is-active');
    menu.classList.remove('is-open');
    body.classList.remove('lock');
    overlay.classList.remove('is-active');
});

overlay.addEventListener('click', () => {
    burger.classList.remove('is-active');
    menu.classList.remove('is-open');
    body.classList.remove('lock');
    overlay.classList.remove('is-active');
});

link.forEach((el) => {
    el.addEventListener('click', (e) => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-open');
        body.classList.remove('lock');
        overlay.classList.remove('is-active');
    });
});