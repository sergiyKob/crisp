import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const mainSlider = new Swiper('.main-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 800,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-slider__next',
        prevEl: '.main-slider__prev',
    },
});

export default mainSlider;