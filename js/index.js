// Your code goes here

const hover = document.querySelector(".logo-heading");
hover.addEventListener('mouseover', () => {
    hover.style.color = "red";
})

window.addEventListener('keydown', () => {
    hover.style.color = "black";
})

window.addEventListener('keyup', (event) => {
    hover.style.color = 'red';
    event.stopPropagation();
})

let p = document.querySelector('.main-navigation');
window.addEventListener('wheel', () => {
    p.classList.add('hidden');
})

window.addEventListener('resize', () => {
    alert('Alert Incoming');
})


const allP = document.querySelector('p');
allP.addEventListener('mouseenter', () => {
    allP.style.color = 'blue';
})

let nav = document.querySelector("a");
let navLinks = document.querySelectorAll('a')
navLinks.forEach(element => {
    element.preventDefault;
})

window.addEventListener("scroll", () => {
    nav.style.color = "red";
})

let selector = document.querySelector("a");
selector.addEventListener('select', () => {
    selector.innerHTML = "Hello There"
})

window.addEventListener("dblclick", (event) => {
    alert("Double Click Test");
})