import Swiper from 'swiper'
import {Pagination,Navigation,Autoplay,EffectCoverflow,} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	const swiperHero1 = new Swiper('#hero-slider', {
		modules: [Pagination, Navigation, EffectCoverflow, Autoplay],
		speed: 500,
		effect: 'coverflow',
		slidesPerView: '1',
		grabCursor: true,
		centeredSlides: true,
		rewind: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			scale: 0.8,
			modifier: 1,
			slideShadows: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: '3',
			},
		},
	})

	// Функция для установки значения num в зависимости от размера экрана
	function setNum() {
		if (window.innerWidth > 1200) {
			swiperHero1.slideTo(1)
		} else {
			swiperHero1.slideTo(0)
		}
	}

	// Вызываем функцию при загрузке страницы
	window.addEventListener('load', setNum)
	// Вызываем функцию при изменении размера окна
	window.addEventListener('resize', setNum)
})
