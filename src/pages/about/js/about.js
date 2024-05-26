import Swiper from 'swiper'
import {Pagination,Navigation,Autoplay,EffectCards,} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	const swiperAbout = new Swiper('#about-slider', {
		modules: [Pagination, Navigation, EffectCards],
		speed: 500,
		effect: 'cards',
		grabCursor: true,
		rewind: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		cardsEffect: {
			perSlideOffset: 10,
			perSlideRotate: 2,
			slideShadows: false,
			rotate: true,
		},
	})

	const swiperAbout2 = new Swiper('#about-slider2', {
		modules: [Pagination, Navigation, Autoplay],
		speed: 500,
		grabCursor: true,
		rewind: true,
		slidesPerView: 3,
		spaceBetween: 30,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
})
