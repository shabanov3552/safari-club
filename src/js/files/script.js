// Подключение функционала "Чертогов Фрилансера"
import { isMobile, _slideToggle, _slideUp } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//#region Global click
document.addEventListener("click", function (e) {
   let target = e.target;

   if (document.querySelector('.promotion')) { promotionOpen(target); }
   if (target.closest('.reserv-btn')) {
      if (document.querySelector('.header').classList.contains('_header-scroll')) {
         const wrapper = document.querySelector('.wrapper');
         const reservFormHeight = document.querySelector('.reserv').clientHeight;
         wrapper.classList.add('show-reserv');
         wrapper.style.paddingTop = `${reservFormHeight}px`;

      }
      e.preventDefault();
   }
});
//#endregion

//#region открытие поля ввода промокода
function promotionOpen(target) {
   let dropDown = document.querySelector('.promotion__dd');


   if (target.closest('.promotion__dd-link')) {
      _slideToggle(dropDown, 300);
   }
   if (!target.closest('.promotion__dd-link') && !target.closest('.promotion__dd')) {
      _slideUp(dropDown, 300);
   }
   if (target.closest('.promotion__button')) {
      _slideUp(dropDown, 300);
   }
}
//#endregion

//#region main video

export function playMainVideo() {
   let startVideo = document.querySelector(".js-start-video");
   let mainVideo = document.querySelector(".js-main-video");

   mainVideo.style.opacity = '0';
   setTimeout(() => {
      startVideo.play();
      startVideo.addEventListener('ended', function (e) {
         document.documentElement.classList.add('end');
         mainVideo.style.opacity = '1';
         mainVideo.play();
         // document.querySelector('.first-block__red-hover').style.opacity = 1;
      });
   }, 150);
}

//#endregion


//#region


//#endregion