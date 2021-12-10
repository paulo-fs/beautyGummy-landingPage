const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.menu-mobile-close');
const openBtn = document.querySelector('.menu-mobile-icon');
const mobileMenuItem = document.querySelectorAll('.close-menu');


openBtn.addEventListener('click', () => {
    menuMobile.classList.remove('inactive');
})

closeBtn.addEventListener('click', () => {
    menuMobile.classList.add('inactive');
})

for (item of mobileMenuItem){
    item.addEventListener('click', () => {
        menuMobile.classList.add('inactive');
    })
}
