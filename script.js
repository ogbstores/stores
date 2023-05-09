let sideMenu = document.querySelector('.side-navigation');

document.querySelector('.hamburger').onclick = () => {
    sideMenu.classList.toggle('active');
}

changeIcon = (icon) => icon.classList.toggle('bi-bi-x')