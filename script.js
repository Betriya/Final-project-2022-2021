const showMenu = document.querySelector('.hamburger');
const hidemenu = document.querySelector('.close')
const menu = document.querySelector('.menu');


const leftslide = menu.getBoundingClientRect().left;
showMenu.addEventListener('click', () => {
    if (leftslide < 0) {
        menu.classList.add('show');

    }
});

hideMenu.addEventListener('click', () => {
    if (leftslide < 0) {
        menu.classList.remove('show')
    }
});