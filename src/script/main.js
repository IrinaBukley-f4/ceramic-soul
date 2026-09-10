import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/sass/style.scss';

const burgerEl = document.querySelector('.burger');
const closeEl = document.querySelector('.header__menu-close');
const menuEl = document.querySelector('.header__menu');

burgerEl.addEventListener('click', () => {
    menuEl.classList.add('header__menu_active');
    document.body.style.overflow = 'hidden';
});

closeEl.addEventListener('click', () => {
    menuEl.classList.remove('header__menu_active');
    document.body.style.overflow = '';
});

try {
    new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },
        breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1920: {
                spaceBetween: 35,
                slidesPerView: 3,
              },
        },
        modules: [Navigation, Pagination],
      });
} catch (e) {

}

