import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const productSlider = new Swiper('.product-slider', {
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  thumbs: {
    swiper: {
      el: '.product-slider-thumbnails',
      slidesPerView: 3,
      spaceBetween: 15,
      direction: 'vertical',
    },
  },
  breakpoints: {
    1024: {
      pagination: false,
    },
  },
});
