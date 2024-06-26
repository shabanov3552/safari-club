/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swipe')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			// on: {

			// }
		});
	}
	if (document.querySelector('.main-slider__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, EffectFade, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 1500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,


			// Эффекты
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.main-slider__slider .swiper-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			// on: {

			// }
		});
	}
	if (document.querySelector('.special-offers__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.special-offers__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 500,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.special-offers__buttons .swiper-button-prev',
				nextEl: '.special-offers__buttons .swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			// on: {

			// }
		});
	}
	if (document.querySelector('.rooms__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.rooms__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.rooms__navigation',
				clickable: true,
				bulletClass: 'rooms__name',
				bulletActiveClass: 'rooms__name_active',
				renderBullet: function (index, className) {
					const bulletsNames = document.querySelectorAll('.rooms__name');
					return `<span class="${className}">${bulletsNames[index].textContent}</span>`;
				}
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.rooms__buttons .swiper-button-prev',
				nextEl: '.rooms__buttons .swiper-button-next',
			},

			// Брейкпоинты

			// breakpoints: {
			// 	320: {
			// 		autoHeight: true,
			// 	},
			// 	1200.98: {
			// 		autoHeight: false,
			// 	},

			// },

			// События
			// on: {

			// }
		});
	}
	if (document.querySelector('.gallery__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.gallery__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.gallery__buttons .swiper-button-prev',
				nextEl: '.gallery__buttons .swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				565: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				1001.98: {
					slidesPerView: 'auto',
				},
			},

			// События
			// on: {

			// }
		});
	}
	if (document.querySelectorAll('.rest-menu__slider').length > 0) { // Указываем скласс нужного слайдера

		const menuSliders = document.querySelectorAll('.rest-menu__slider');
		menuSliders.forEach((slider, i) => {
			slider.parentElement.classList.add(`rest-menu__body_${i}`);
			new Swiper(slider, { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				// autoHeight: true,
				speed: 800,

				//touchRatio: 0,
				//simulateTouch: false,
				//loop: true,
				//preloadImages: false,
				//lazy: true,

				/*
				// Эффекты
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/

				// Пагинация
				/*
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				*/

				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: `.rest-menu__body_${i} .swiper-button-prev`,
					nextEl: `.rest-menu__body_${i} .swiper-button-next`,
				},

				// Брейкпоинты
				/*
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				*/
				// События
				// on: {

				// }
			});
		});
	}
	if (document.querySelector('.documents__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.documents__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 80,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.documents__slider .swiper-button-prev',
				nextEl: '.documents__slider .swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				550: {
					slidesPerView: 2,
				},
				835: {
					slidesPerView: 3,
				},
				1120: {
					slidesPerView: 4,
				},
				1405: {
					slidesPerView: 5,
				},
			},

			// События
			// on: {

			// }
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});