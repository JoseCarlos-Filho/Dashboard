"use strict";

/*
 * ativa a classe toggle no header.
 * quando clicado no botão nav-toggle-btn
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");
// console.log(header);

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

/*
 * Altera ctx-menu quando clicado em card-menu-btn
 */

const menuBtn = document.querySelectorAll("[data-menu-btn]");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}
