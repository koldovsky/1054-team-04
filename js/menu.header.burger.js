
const iconBurger = document.querySelector(".menu__header__burger-icon");
const burgerNavigation = document.querySelector(".menu__header__nav");
const menuItems = document.querySelector(".menu__header__menu-items");
burgerNavigation.addEventListener("click", (e) => {
  burgerNavigation.classList.toggle("active");
  menuItems.classList.toggle("burger");
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) {
    burgerNavigation.classList.remove("active"); // Видаляємо клас .active
  }
});
