const menuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')

let scroll = true

menuBtn.addEventListener('click', showNav);

function showNav(){
    menuBtn.classList.toggle('open')
    mobileMenu.classList.toggle('active')
    
}







// Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = false;
const intervalTime = 5000;
let slideInterval;

// Next Slide
const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current')
    // remove current 
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling){
        // add current next
        current.nextElementSibling.classList.add('current');
    }else{
        // add current to start 
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
// Prev Slide
const prevSlide = () => {
    // get current class
    const current = document.querySelector('.current')
    // remove current 
    current.classList.remove('current');
    // check for prev slide
    if(current.previousElementSibling){
        // add current prev
        current.previousElementSibling.classList.add('current');
    }else{
        // add current to last 
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide()
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if(active.nextElementSibling) {
        active.nextElementSibling.classList.add('active');
    }else{
        dots[0].classList.add('active')
    }
    setTimeout(() => active.classList.remove('active'))
})
prev.addEventListener('click', e => {
    prevSlide()
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if(active.previousElementSibling) {
        active.previousElementSibling.classList.add('active');
    }else{
        dots[dots.length - 1].classList.add('active')
    }
    setTimeout(() => active.classList.remove('active'))
})