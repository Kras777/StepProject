const btnNavMenu = document.getElementById('togglerBtn');
const menu = document.getElementById('navBarMenu');

function mobileMenu() {
    menu.classList.toggle('navbar-menu-hidden');
}

btnNavMenu.addEventListener("click", mobileMenu);