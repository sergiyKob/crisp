!function(){var e={28:function(){const e=document.querySelector(".burger"),t=document.querySelector(".header__center"),s=document.querySelector(".body"),c=document.querySelectorAll(".menu__link"),o=document.querySelector(".btn--sign-in"),i=document.querySelector(".overlay");e.addEventListener("click",(()=>{e.classList.toggle("is-active"),t.classList.toggle("is-open"),s.classList.toggle("lock"),i.classList.toggle("is-active")})),o.addEventListener("click",(()=>{e.classList.remove("is-active"),t.classList.remove("is-open"),s.classList.remove("lock"),i.classList.remove("is-active")})),i.addEventListener("click",(()=>{e.classList.remove("is-active"),t.classList.remove("is-open"),s.classList.remove("lock"),i.classList.remove("is-active")})),c.forEach((c=>{c.addEventListener("click",(c=>{e.classList.remove("is-active"),t.classList.remove("is-open"),s.classList.remove("lock"),i.classList.remove("is-active")}))}))},207:function(){const e=document.querySelectorAll("[data-popup-btn]"),t=document.querySelectorAll("[data-popup-close]"),s=document.querySelector(".overlay"),c=document.querySelector(".body");e.forEach((function(e){e.addEventListener("click",(function(){const e=this.dataset.popupBtn,o=document.querySelector("#"+e);o.classList.toggle("is-open"),s.classList.toggle("is-active"),c.classList.add("lock"),t.forEach((function(e){e.addEventListener("click",(function(){o.classList.remove("is-open"),s.classList.remove("is-active"),c.classList.remove("lock")}))})),s.addEventListener("click",(function(){o.classList.remove("is-open"),s.classList.remove("is-active"),c.classList.remove("lock")}))}))}))}},t={};function s(c){var o=t[c];if(void 0!==o)return o.exports;var i=t[c]={exports:{}};return e[c](i,i.exports,s),i.exports}!function(){"use strict";s(28),s(207);document.querySelectorAll('[data-title="accordionFooterBtn"]').forEach((function(e){e.addEventListener("click",(function(){this.classList.toggle("is-active"),this.nextElementSibling.classList.toggle("is-open")}))}));const e=document.querySelector(".dashboard-menu-btn"),t=document.querySelector(".dashboard-nav");e.addEventListener("click",(function(){e.classList.toggle("is-active"),t.classList.toggle("is-open")}))}()}();