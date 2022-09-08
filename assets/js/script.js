"use strict";

/*
 * ativa a classe toggle no header.
 * quando clicado em nav-toggle-btn
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");
// console.log(header);

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
