const menuPrevButton = document.querySelector('.menu__button-prev');
const menuNextButton = document.querySelector('.menu__button-next');

const swiperMenu = new Swiper('.swiper--menu', {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: menuNextButton,
    prevEl: menuPrevButton, 
  },

  
});
 
const swiperMenuPhoto = new Swiper('.swiper--menu__photo', {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination--menu__photo',
    clickable: true,
  },

  
});
const swiper = new Swiper('.swiper_facilities', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination__facilities',
  },

});