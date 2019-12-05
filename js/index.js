// Your code goes here

const btnContainer = document.querySelector('.destination');
btnContainer.addEventListener('click', () => {
    alert('CONTAINER CLICKED');
})

const btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
    alert('BTN CLICK');
    event.stopPropagation();
})

const hover = document.querySelector(".logo-heading");
hover.addEventListener('mouseover', (event) => {
    hover.style.color = "red";
})

window.addEventListener('keydown', () => {
    hover.style.color = "black";
})

window.addEventListener('keyup', () => {
    hover.style.color = 'green';
})

let p = document.querySelector('.main-navigation');
window.addEventListener('wheel', () => {
    p.classList.add('hidden');
})

window.addEventListener('resize', () => {
    alert('Alert Incoming');
})


const allP = document.querySelector('p')
allP.addEventListener('mouseenter', (event) => {
    allP.style.color = 'blue';
})

let nav = document.querySelector("a");
let navLinks = document.querySelectorAll('a')

document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Stopped Link');
    })
})

window.addEventListener("scroll", () => {
    nav.style.color = "red";
})

window.addEventListener("dblclick", (event) => {
    alert("Double Click Test");
    event.stopPropagation();
})