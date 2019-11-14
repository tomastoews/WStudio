import SmoothScroll from './smooth-scroll.min.js';

const scroll = new SmoothScroll('a[href*="#"]');

const mobileNavbarButton = document.querySelector('#mobile-navbar_button');
const mobileNavigation = document.querySelector('#mobile-navigation');
const closeNavigation = document.querySelector('#close-navbar-button');

mobileNavbarButton.addEventListener('click', function() {
    mobileNavigation.classList.add('open');
    mobileNavigation.classList.remove('close');
});

closeNavigation.addEventListener('click', function() {
    mobileNavigation.classList.add('close');
    mobileNavigation.classList.remove('open');
});

document.addEventListener('scroll', function() {
    mobileNavigation.classList.add('close');
    mobileNavigation.classList.remove('open');
});