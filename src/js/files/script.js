// Подключение функционала "Чертогов Фрилансера"
import { isMobile, _slideToggle, _slideUp } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//#region Global click

document.addEventListener("click", function (e) {
   let target = e.target;

   if (document.querySelector('.promotion')) { promotionOpen(target); }

   // показать всплывашку бронирования в хедере
   if (target.closest('.reserv-btn')) {
      if (document.querySelector('.header').classList.contains('_header-scroll')) {
         const wrapper = document.querySelector('.wrapper');
         const reservFormHeight = document.querySelector('.reserv').clientHeight;
         wrapper.classList.add('show-reserv');
         wrapper.style.paddingTop = `${reservFormHeight}px`;
      }
      e.preventDefault();
   }

   // очистка инпута
   if (e.target.closest('.form__clear-svg')) {
      let input = e.target.closest('.form__line').querySelector('input') || e.target.closest('.form__line').querySelector('textarea');
      input.value = '';
      input.classList.remove('_form-focus');
      input.parentElement.classList.remove('_form-focus');
      e.target.closest('.form__clear-svg').classList.remove('_active');
      // Inputmask.remove(input);
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

//#region Проиграть видео на главном экране

function playMainVideo() {
   let startVideo = document.querySelector(".js-start-video");
   let mainVideo = document.querySelector(".js-main-video");

   mainVideo.style.opacity = '0';
   setTimeout(() => {
      startVideo.play();
      startVideo.addEventListener('ended', function (e) {
         document.documentElement.classList.add('end');
         mainVideo.style.opacity = '1';
         mainVideo.play();
      });
   }, 150);
}
window.playMainVideo = playMainVideo;

//#endregion

//#region


//#endregion