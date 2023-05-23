let sideMenu = document.querySelector('.side-navigation');
let body = document.body;
const menuIcon = document.querySelector(".hamburger i");
let loader = document.getElementById('loader');
let element = document.querySelector('.element');
let username = document.querySelector('.user-name');
let drop = document.querySelector('.dropdown');
let popUp = document.getElementById('pop-up');
let popBox = document.querySelector('.pop-box');
var productImg = document.querySelectorAll('.product-img');
let acct = document.querySelector('.account');
let mini = document.querySelector('.mini');
let caret = document.querySelector('.caret')


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

for(let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('click', function(){
        popUp.style.display = "block";
        popBox.style.backgroundImage = `url(./assets/pic.jpg)`;
    })
}

popUp.addEventListener('click', function(){
    this.style.display = "none";
})

document.querySelector(".account").onclick = () => {
    mini.style.display = mini.style.display === "block" ? "none" : "block";
    caret.classList.toggle('active');
}