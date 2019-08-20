import React from 'react';
import Swiper from 'react-id-swiper'

const Slide = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        spaceBetween: 100,
        loop: true,
        centeredSlides: true,
    }
    return (
        // <Swiper {...params}>
        //     <img src='./img/attendee.png' alt="attendee" /><p>attendee</p>
        //     <img src='./img/trainer.png' alt="trainer" /><p>trainer</p>
        //     <img src='./img/management.png' alt="manager" /><p>management</p>
        //     <img src='./img/observer.png' alt="observer" /><p>observer</p>
        // </Swiper>
        // <Swiper {...params}>
        //     <img src='./img/attendee.png' alt="attendee" />
        //     <img src='./img/trainer.png' alt="trainer" />
        //     <img src='./img/management.png' alt="manager" />
        //     <img src='./img/observer.png' alt="observer" />
        // </Swiper> 
        < Swiper {...params}>
            <img src='./imgs/attendee.jpeg' alt="attendee" />
            <img src='./imgs/trainer.jpeg' alt="trainer" />
            <img src='./imgs/management.jpeg' alt="manager" />
            <img src='./imgs/observer.jpeg' alt="observer" />
        </Swiper >
    )
}

export default Slide;