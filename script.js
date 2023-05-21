let sideMenu = document.querySelector('.side-navigation');
let body = document.body;
const menuIcon = document.querySelector(".hamburger i");
let loader = document.getElementById('loader');
let element = document.querySelector('.element');
let username = document.querySelector('.user-name');
let drop = document.querySelector('.dropdown');


document.querySelector('.hamburger').onclick = () => {
    element.classList.toggle('active');
    username.classList.toggle('active');
    drop.classList.toggle('active');

    menuIcon.type = menuIcon.type === "menu" ? "cancel" : "menu";

    menuIcon.className = `${menuIcon.type === "menu" ? "bi bi-x" : "bi bi-list"}`
    sideMenu.classList.toggle('active');
}

window.addEventListener("load", function(){
    loader.style.display = "none";
    body.style.overflow = "scroll"
})