import React from 'react';
import Swiper from 'react-id-swiper';

const Slide = (props) => {
	const params = {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 'auto',
		spaceBetween: 100,
		loop: true,
		centeredSlides: true,
		on: {
			slideChangeTransitionStart: props.swiperHandler
		}
	};
	return (
		<Swiper {...params}>
			<img src="./img/attendee.png" alt="Attendee" />
			<img src="./img/trainer.png" alt="Trainer" />
			<img src="./img/management.png" alt="Manager" />
			<img src="./img/observer.png" alt="Observer" />
		</Swiper>
	);
};

export default Slide;
