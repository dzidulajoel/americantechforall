const links = document.querySelectorAll('.media li a');

links.forEach(link => {
    link.addEventListener('click', function () {
            links.forEach(link => link.classList.remove('active_bar'));
            link.classList.add('active_bar');
    });
});

const links_mobile = document.querySelectorAll('.menu_nav li a');

links_mobile.forEach(link => {
    link.addEventListener('click', function () {
            links_mobile.forEach(link => link.classList.remove('active_bar_mobile'));
            link.classList.add('active_bar_mobile');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.querySelector('.btn_menu');
    const menuNav = document.querySelector('.menu_nav');

    btnMenu.addEventListener('click', function() {
        menuNav.classList.toggle('open');
    });
});