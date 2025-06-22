// import Swiper JS
import Swiper from 'swiper';
// import Swiper JS Modules
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    // Swiper to use modules
    modules: [Navigation],
    // Configure Swiper
    slidesPerView: 1.2,
    spaceBetween: 10,
    // loop: true,
    breakpoints: {
      // 381: {
      //   slidesPerView: 2.9,
      //   spaceBetween: 15,
      //   loop: true,
      // },

      576: {
        slidesPerView: 1.5,
        spaceBetween: 15,
        // loop: true,
      },

      1201: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        // loop: true,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
  });
};
