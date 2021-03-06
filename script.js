// sticky nav menu js

let nav=document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// side nav menu js

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
} 
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto ";
} 

// side nav bar close we click on nav link
let navLinks = document.querySelectorAll(".menu li a");
for(var i=0; i < navLinks.length ;i++)
{
    navLinks[i].addEventListener("click",function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity="1";
        menuBtn.style.pointerEvents="auto";

    })
}

let preloader = document.querySelector(".spin")
preloader.classList.add("activeSpin")
setInterval(remove, 5000);
function remove()
{
    preloader.classList.remove("activeSpin")
}
$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

