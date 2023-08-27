document.addEventListener('DOMContentLoaded', function() {
    let burgerButton = document.querySelector('.header__navigation-burger');
    let menuBox = document.querySelector('.menubox');

    burgerButton.addEventListener('click', function() {
        burgerButton.classList.toggle('active');
        menuBox.classList.toggle('active');
    });
});