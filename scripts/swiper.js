const menuPrevButton = document.querySelector('.menu__button-prev');
const menuNextButton = document.querySelector('.menu__button-next');

const swiperCoreFeatures = new Swiper('.swiper--core-features', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    pagination: {
      el: '.swiper-pagination--core-features',
      clickable: true,
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

 const swiperCoreFeaturesDark = new Swiper('.swiper__core-features--dark', {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination__core-features--dark',
    clickable: true,
  },

  
 });

   