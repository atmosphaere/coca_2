// import Swiper JS
import Swiper from 'swiper';
// import Swiper JS Modules
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

let swiperInstance;

export const useBlogSlider = () => {
  swiperInstance = new Swiper('.hero__slider', {
    // Swiper to use modules
    modules: [Navigation],
    // Configure Swiper
    slidesPerView: 1.5,
    spaceBetween: 10,
    // loop: true,
    breakpoints: {
      381: {
        slidesPerView: 2.9,
        spaceBetween: 15,
        loop: true,
      },

      577: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        loop: true,
      },

      1201: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.blog__btn--next',
      prevEl: '.blog__btn--prev',
    },
  });
};

export const useTabFilter = () => {
  // Получаем все button внутри списка hero__tabs-item
  const tabs = document.querySelectorAll('.hero__tabs-item button');
  // Получаем все слайды hhero__slide
  const slides = document.querySelectorAll('.hero__slide');
  // Получаем все списки hero__tabs-item
  const tabList = document.querySelectorAll('.hero__tabs-item');
  // Получаем все кнопки в списке hero__tabs
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Переменная для родителя
      const parentLi = tab.parentElement;

      // Проверяем, если текущая вкладка уже активна, отменяем действие
      if (parentLi.classList.contains('hero__tabs-item--active')) {
        return;
      }

      // Удаляем класс активности со всех вкладок
      tabList.forEach((item) => {
        item.classList.remove('hero__tabs-item--active');
      });

      // Добавляем класс активности к текущей вкладке
      parentLi.classList.add('hero__tabs-item--active');

      // Получаем значение дата атрибута кнопке по которой был клик
      const tabValue = tab.getAttribute('data-tab');

      if (tabValue) {
        // Добавляем класс none к слайдам, у которых data-rubric не совпадает с tabValue
        slides.forEach((slide) => {
          if (slide.getAttribute('data-rubric') !== tabValue) {
            slide.classList.add('none');
          } else {
            slide.classList.remove('none');
          }
        });
      } else {
        // Если кнопка не имеет data-tab, удаляем класс none со всех слайдов
        slides.forEach((slide) => {
          slide.classList.remove('none');
        });
      }
      // Обновляем Swiper
      swiperInstance.update();
    });
  });
};
