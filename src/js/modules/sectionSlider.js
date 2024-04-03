import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const sectionSlider = new Swiper('.sectionSlider', {
  //   loop: true,
  slidesPerView: 5,
  spaceBetween: 25,

  navigation: {
    nextEl: '.section-btn-next',
    prevEl: '.section-btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

export default sectionSlider;
