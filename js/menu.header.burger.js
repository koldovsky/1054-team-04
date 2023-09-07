
const iconBurger = document.querySelector(".menu__header__burger-icon");
const menuContainer = document.querySelector(".menu__header__nav__social__container");
const burgerNavigation = document.querySelector(".menu__header__nav");
const menuItems = document.querySelector(".menu__header__menu-items");
const socialMedia = document.querySelector(".menu__header__working-hours-social-media");
const body = document.querySelector("body");
burgerNavigation.addEventListener("click", (e) => {
  menuContainer.classList.toggle("burger-menu");
  burgerNavigation.classList.toggle("active");
  menuItems.classList.toggle("burger");
  socialMedia.classList.toggle("burger-menu");
  iconBurger.classList.toggle("active");
  body.classList.toggle("lock");
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 992 && menuContainer.classList.contains("burger-menu")) {
    menuContainer.classList.remove("burger-menu");
    burgerNavigation.classList.remove("active");
    socialMedia.classList.remove("burger-menu");
    menuItems.classList.remove("burger");
    body.classList.remove("lock");
  }
  if (window.innerWidth < 992 && iconBurger.classList.contains("active")) {
    menuContainer.classList.add("burger-menu");
    burgerNavigation.classList.add("active");
    socialMedia.classList.add("burger-menu");
    menuItems.classList.add("burger");
    iconBurger.classList.add("active");
    body.classList.add("lock");
  }

});
