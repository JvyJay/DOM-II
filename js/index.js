// Your code goes here

const hover = document.querySelector(".logo-heading");
hover.addEventListener('mouseover', (event) => {
    hover.style.color = "red";
})

window.addEventListener('keydown', (event) => {
    hover.style.color = "black";
})

window.addEventListener('wheel', (event) => {
    alert("Down or Up the wheel?");
})

window.addEventListener('drag / drop', (event) => {
    alert("Filler Text");
})

let whole = document.querySelector(".intro");
whole.addEventListener('load', (event) => {
    event.style.display = "none";
})

let focusing = document.querySelector(".btn");
focusing.addEventListener('focus', (event) => {
    event.style.display = "none";
})

let nav = document.querySelector(".nav-link").addEventListener("click", function (event) {
    event.preventDefault();
});

window.addEventListener("scroll", (event) => {
    alert("Scroll test");
})

let selector = document.getElementsByTagName("p");
selector[0].addEventListener('select', (event) => {
    event.style.color = "blue";
})

window.addEventListener("dblclick", (event) => {
    alert("Double Click Test");
})