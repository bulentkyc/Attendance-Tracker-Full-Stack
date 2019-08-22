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
		spaceBetween: 90,
		loop: true,
		centeredSlides: true,
		on: {
			slideChangeTransitionStart: props.swiperHandler
		}
	};
	return (
		<Swiper {...params}>
			<figure>
				<img src="./img/attendee.png" alt="Attendee" />
				<figcaption>Attendee</figcaption>
			</figure>
			<figure>
				<img src="./img/trainer.png" alt="Trainer" />
				<figcaption>Trainer</figcaption>
			</figure>
			<figure>
				<img src="./img/management.png" alt="Manager" />
				<figcaption>Manager</figcaption>
			</figure>
			<figure>
				<img src="./img/observer.png" alt="Observer" />
				<figcaption>Observer</figcaption>
			</figure>
		</Swiper>
	);
};

export default Slide;
