const menu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});