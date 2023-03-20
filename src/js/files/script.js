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

//#region render video preview in video gallery

class YouTubeVideoPreview {
   constructor(videoId, element) {
      this.element = element;
      this.apiKey = "AIzaSyAwGUSLR-S7iSRFO6JDZwlEskC_5M6zeys";
      this.videoId = videoId;
      this.url = `https://www.googleapis.com/youtube/v3/videos?id=${this.videoId}&part=snippet&key=${this.apiKey}`;
      this.imgSrc = '';
      this.title = '';
      this.date = '';
   }

   getVideoData() {

      let res = fetch(this.url).then(r => r.json());

      if (res.status === "error") {
         console.error(res);
      } else {
         res.then(json => {
            this.title = json.items[0].snippet.title;
            let date = new Date(json.items[0].snippet.publishedAt);
            this.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
            this.imgSrc = json.items[0].snippet.thumbnails.maxres.url;
            this.renderPreview();
         });
      }
   }

   renderPreview() {
      let html = `
      <div class="video-gallery__image-ibg"><img src="${this.imgSrc}" alt=""></div>
      <div class="video-gallery__item-descr">
         <div class="video-gallery__name">${this.title}</div>
         <div class="video-gallery__date">${this.date}</div>
      </div>`;
      this.element.innerHTML = html;
   }
}

const videos = document.querySelectorAll("[data-popup-youtube]");
if (videos.length > 0) {
   videos.forEach(video => {
      let preview = new YouTubeVideoPreview(video.dataset.popupYoutube, video);
      preview.getVideoData();
   });
}

//#endregion

//#region gazebo-card time choise
// .gazebo-card
// .gazebo-card__hours-fragment
// .gazebo-card__hours-fragment_in-selected-range
// .gazebo-card__hours-fragment_selected
// .gazebo-card__hours-fragment_hovered
// .gazebo-card__hours-fragment_last-in-row
// .gazebo-card__hours-fragment_last-selected
// .gazebo-card__hours-fragment_brr
// .gazebo-card__hours-fragment_last-hovered
// const gazeboCard = document.querySelectorAll('#gazebo-card-1');

// gazeboCard.add

//#endregion