const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.menu-mobile-close');
const openBtn = document.querySelector('.menu-mobile-icon');
const mobileMenuItem = document.querySelectorAll('.close-menu');
const btnComprar = document.querySelector('#btnComprar');


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

btnComprar.addEventListener('click', () => {
    const url = 'https://farmaciaqualifarma.com.br/harmonize-beauty-gummy-30-gomas-com-verisol-2-5g-silicio-vitaminas-e-minerais.html';

    window.open(url, '_blank');
    console.log('comprar');
})

