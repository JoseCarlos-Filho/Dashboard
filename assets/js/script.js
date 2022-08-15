'use strict';

/* 
* ativa a classe toggle no header. 
* quando clicado em nav-toggle-btn
*/

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");

navToggleBtn.addEventListener("click", () => {
    header.classList.toggle("active");
    console.log(header.classList.toggle("active"));
});