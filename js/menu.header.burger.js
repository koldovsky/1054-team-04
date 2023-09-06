
const iconBurger = document.querySelector(".menu__header__burger-icon");
const menuContainer = document.querySelector(".menu__header__nav__social__container");
const burgerNavigation = document.querySelector(".menu__header__nav");
const menuItems = document.querySelector(".menu__header__menu-items");
const socialMedia = document.querySelector(".menu__header__working-hours-social-media");
burgerNavigation.addEventListener("click", (e) => {
  menuContainer.classList.toggle("burger-menu");
  burgerNavigation.classList.toggle("active");
  menuItems.classList.toggle("burger");
  socialMedia.classList.toggle("burger-menu");
  iconBurger.classList.toggle("active");
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) {
    burgerNavigation.classList.remove("active");
    socialMedia.classList.remove("burger-menu") 
  } else burgerNavigation.classList.add("active");
  socialMedia.classList.remove("burger-menu"); 
});
