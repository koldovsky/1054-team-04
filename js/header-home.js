(function() {
    const burgerButton = document.querySelector('.header__navigation-burger');
    const menuBox = document.querySelector('.menubox');

    burgerButton.addEventListener('click', function() {
        burgerButton.classList.toggle('active');
        menuBox.classList.toggle('active');
    });
}) ();

