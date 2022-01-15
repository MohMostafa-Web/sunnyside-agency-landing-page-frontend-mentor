const toogleMenuBtn = document.querySelector(".toggle-menu");
const navUl = document.querySelector("nav ul");
const navUlLinks = document.querySelectorAll("nav ul li a");

// Toggle Mobile Menu Nav
toogleMenuBtn.onclick = function () {
  this.classList.toggle("active");
  navUl.classList.toggle("show");
};

// Hide Mobile Menu Nav when you click on one of links in Menu
navUlLinks.forEach((link) => {
  link.onclick = function () {
    navUl.classList.remove("show");
  };
});
