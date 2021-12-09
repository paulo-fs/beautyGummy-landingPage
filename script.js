const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.menu-mobile-close');
const openBtn = document.querySelector('.menu-mobile-icon');

openBtn.addEventListener('click', () => {
    menuMobile.classList.remove('inactive');
})

closeBtn.addEventListener('click', () => {
    menuMobile.classList.add('inactive');
})