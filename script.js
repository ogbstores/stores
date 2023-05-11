let sideMenu = document.querySelector('.side-navigation');
const menuIcon = document.querySelector(".hamburger i");

document.querySelector('.hamburger').onclick = () => {
    menuIcon.type = menuIcon.type === "menu" ? "cancel" : "menu";

    menuIcon.className = `${menuIcon.type === "menu" ? "bi bi-x" : "bi bi-list"}`
    sideMenu.classList.toggle('active');
}

