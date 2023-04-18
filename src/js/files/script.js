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
      const reservFormHeight = document.querySelector('.reserv').clientHeight;
      const wrapper = document.querySelector('.wrapper');
      if (!wrapper.classList.contains('show-reserv')) {
         if (document.querySelector('.header').classList.contains('_header-scroll') && window.matchMedia('(max-width: 1001.98px)').matches) {
            wrapper.classList.add('show-reserv');
         } else if (window.matchMedia('(max-width: 1001.98px)').matches) {
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.add('show-reserv');
         } else if (document.querySelector('.header').classList.contains('_header-scroll')) {
            wrapper.classList.add('show-reserv');
            if (wrapper.querySelector('.page.main-page, .page.rooms-main, .page.room-detail')) {
               wrapper.style.paddingTop = `${reservFormHeight}px`;
            }
         } else {
            if (!wrapper.querySelector('.page.main-page, .page.rooms-main, .page.room-detail')) {
               wrapper.classList.add('show-reserv');
            }
         }
      } else {
         wrapper.classList.remove('show-reserv');
         wrapper.style.paddingTop = 0;
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

// - gazebo-card__hours-fragment
// - gazebo-card__hours-fragment_selected
// - gazebo-card__hours-fragment_in-selected-range
// - gazebo-card__hours-fragment_brl
// - gazebo-card__hours-fragment_hovered
// - gazebo-card__hours-fragment_last-selected
// - gazebo-card__hours-fragment_brr
// - gazebo-card__hours-fragment_last-hovered
// - gazebo-card__hours-fragment_last-in-row

//========================================================================================================================================================

// const timeCells = document.querySelectorAll('#time-range tbody td');
// const result = document.getElementById('time-range-result');

// let startTime = null;
// let endTime = null;

// for (let timeCell of timeCells) {
//    timeCell.addEventListener('click', (event) => {
//       // если кликнули на уже выбранную ячейку, снимаем выбор
//       if (event.target.classList.contains('selected')) {
//          event.target.classList.remove('selected');
//          startTime = null;
//          endTime = null;
//       } else {
//          // снимаем выбор со всех других ячеек
//          for (let cell of timeCells) {
//             cell.classList.remove('selected');
//          }
//          // добавляем выбранную ячейку и определяем начальное/конечное время
//          event.target.classList.add('selected');
//          if (startTime === null) {
//             startTime = event.target.getAttribute('data-time');
//          } else {
//             endTime = event.target.getAttribute('data-time');
//          }
//       }
//       // обновляем текстовое поле с выбранным временем
//       if (startTime === null) {
//          result.textContent = '';
//       } else if (endTime === null) {
//          result.textContent = startTime;
//       } else {
//          result.textContent = `${startTime} - ${endTime}`;
//       }
//    });
// }

//========================================================================================================================================================

// const timepicker = document.querySelector('.gazebo-card__timepicker');
// const timeFragments = timepicker.querySelectorAll('.gazebo-card__hours-fragment');
// let lastSelectedTimeFragmentIndex = 0;

// timepicker.addEventListener('mouseover', (event) => {
//    const target = event.target;
//    if (target.classList.contains('gazebo-card__hours-fragment')) {
//       const index = Array.from(timeFragments).indexOf(target);
//       if (index !== -1) {
//          timeFragments.forEach((timeFragment, i) => {
//             if (i <= index && i >= lastSelectedTimeFragmentIndex) {
//                timeFragment.classList.add('in-selected-range', 'hovered');
//             } else {
//                timeFragment.classList.remove('in-selected-range', 'hovered');
//             }
//          });
//       }
//    }
// });

// timepicker.addEventListener('mouseout', () => {
//    timeFragments.forEach((timeFragment) => {
//       timeFragment.classList.remove('hovered');
//    });
// });

// timepicker.addEventListener('click', (event) => {
//    const target = event.target;
//    if (target.classList.contains('gazebo-card__hours-fragment')) {
//       const index = Array.from(timeFragments).indexOf(target);
//       if (index !== -1) {
//          timeFragments.forEach((timeFragment, i) => {
//             if (i <= index && i >= lastSelectedTimeFragmentIndex) {
//                timeFragment.classList.add('selected');
//             } else {
//                timeFragment.classList.remove('in-selected-range', 'selected');
//             }
//          });
//          lastSelectedTimeFragmentIndex = index;
//       }
//    }
// });

// ========================================================================================================================================================

// - gazebo-card__hours-fragment
// - gazebo-card__hours-fragment_selected
// - gazebo-card__hours-fragment_in-selected-range
// - gazebo-card__hours-fragment_brl
// - gazebo-card__hours-fragment_hovered
// - gazebo-card__hours-fragment_last-selected
// - gazebo-card__hours-fragment_brr
// - gazebo-card__hours-fragment_last-hovered
// - gazebo-card__hours-fragment_last-in-row


// фукция высчитывания каждого 6-го элемента.

// function calculateSixthFragments(arr) {
//    for (let i = 5; i < arr.length; i += 6) {
//       arr[i].classList.add('last-in-row');
//    }
// }

// const timepicker = document.querySelector('.gazebo-card__timepicker');
// const timeFragments = timepicker.querySelectorAll('.gazebo-card__hours-fragment');

// calculateSixthFragments(timeFragments);
//========================================================================================================================================================

// let lastSelectedTimeFragmentIndex = 0;
// let hourFragmentSelected = false;
// let startTime = null;
// let endTime = null;

// timepicker.addEventListener('click', (e) => {
//    let target = e.target;
//    let targetTime = target.closest('.gazebo-card__hours-fragment');
//    let targetIndex = Array.from(timeFragments).indexOf(targetTime);

//    if (targetTime) {


//       if (startTime === null) {
//          targetTime.classList.add('selected');
//          startTime = targetTime;

//       } else if (endTime === null && startTime !== null) {
//          targetTime.classList.add('selected');
//          endTime = targetTime;
//       } else {
//          if (targetTime === startTime) {
//             targetTime.classList.remove('selected');
//             startTime = null;
//          } else if (targetTime === endTime) {
//             targetTime.classList.remove('selected');
//             endTime = null;
//          }
//       }
//       for (let index = 0; index < timeFragments.length; index++) {
//          const element = timeFragments[index];
//          if (element === targetTime) {
//             console.log('qwe');
//          }
//          console.log(index, element);
//       }



//       lastSelectedTimeFragmentIndex = targetIndex;
//       console.log(startTime);
//       console.log(endTime);
//       console.log(lastSelectedTimeFragmentIndex);
//    }
// });

// for (let timeCell of timeCells) {
//    timeCell.addEventListener('click', (event) => {
//       // если кликнули на уже выбранную ячейку, снимаем выбор
//       if (event.target.classList.contains('selected')) {
//          event.target.classList.remove('selected');
//          startTime = null;
//          endTime = null;
//       } else {
//          // снимаем выбор со всех других ячеек
//          for (let cell of timeCells) {
//             cell.classList.remove('selected');
//          }
//          // добавляем выбранную ячейку и определяем начальное/конечное время
//          event.target.classList.add('selected');
//          if (startTime === null) {
//             startTime = event.target.getAttribute('data-time');
//          } else {
//             endTime = event.target.getAttribute('data-time');
//          }
//       }
//       // обновляем текстовое поле с выбранным временем
//       if (startTime === null) {
//          result.textContent = '';
//       } else if (endTime === null) {
//          result.textContent = startTime;
//       } else {
//          result.textContent = `${startTime} - ${endTime}`;
//       }
//    });
// }

//#endregion

if (document.documentElement.getAttribute('lang') === 'en') {
   document.querySelector('.wrapper').classList.add('lang-en');
}
