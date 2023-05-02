
AOS.init();
document.querySelector('.header-logo').addEventListener('mouseout', function(event)
{

    document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
}, false);


document.querySelector('.header-logo').addEventListener('mouseover', function(event)
{
    document.querySelector('.header-wrapper__blur').style.filter = 'blur(10px)';
}, false);

document.querySelector('.burger').addEventListener('click', function(event)
{
    document.querySelector('.header__nav-menu-links').style.left = '0';
}, false);

document.querySelector('.close-burger').addEventListener('click', function(event)
{
    document.querySelector('.header__nav-menu-links').style.left = '-100%';
}, false);

let mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
    document.querySelector('.header-wrapper__blur').style.filter = 'blur(10px)';
} else {
    document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
}