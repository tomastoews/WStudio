var scroll = new SmoothScroll('a[href*="#"]');
var mobileNavbarButton = document.querySelector('#mobile-navbar_button');
var mobileNavigation = document.querySelector('#mobile-navigation');
var closeNavigation = document.querySelector('#close-navbar-button');

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