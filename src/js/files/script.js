// Подключение функционала "Чертогов Фрилансера"
import { isMobile, _slideToggle, _slideUp } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//#region Global click
document.addEventListener("click", function (e) {
   let target = e.target;

   if (target.closest('.promotion__dd-link')) {
      _slideToggle(document.querySelector('.promotion__dd'), 300);
   }
   if (!target.closest('.promotion__dd-link') && !target.closest('.promotion__dd')) {
      _slideUp(document.querySelector('.promotion__dd'), 300);
   }
   if (target.closest('.promotion__button')) {
      _slideUp(document.querySelector('.promotion__dd'), 300);
   }
});
//#endregion