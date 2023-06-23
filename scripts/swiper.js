const menuPrevButton = document.querySelector('.menu__button-prev');
const menuNextButton = document.querySelector('.menu__button-next');

const relatedRoomsPrev= document.querySelector('.related-rooms__button-prev');
const relatedRoomsNext = document.querySelector('.related-rooms__button-next');

const popularRoomsPrev= document.querySelector('.popular-rooms__button-prev');
const popularRoomsNext = document.querySelector('.popular-rooms__button-next');

const handpickerRoomsPrev= document.querySelector('.handpicked-rooms__button-prev');
const handpickerRoomsNext = document.querySelector('.handpicked-rooms__button-next');

const swiperHandpicked = new Swiper('.swiper__handpicked--rooms', {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: handpickerRoomsNext,
    prevEl: handpickerRoomsPrev, 
  },

  
});

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
const swiper = new Swiper('.swiper__core-features', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination__core-features',
  },

});

const swiperCore = new Swiper('.swiper__core-features--dark', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination__core-features--dark',
  },
})

const swiperCounter = new Swiper('.swiper__fun-facts__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination--fun-facts',
  },
})

const swiperRelatedRooms = new Swiper('.room-features__swiper', {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  
  navigation: {
  nextEl: relatedRoomsNext,
  prevEl: relatedRoomsPrev, 
 },

  
});

const swiperPopularRooms = new Swiper('.swiper__popular-rooms', {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  
  navigation: {
    nextEl: popularRoomsNext,
    prevEl: popularRoomsPrev, 
  },

  
});