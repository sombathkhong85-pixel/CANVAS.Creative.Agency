// mobile menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


// scroll reveal animation

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);


// custom cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});
