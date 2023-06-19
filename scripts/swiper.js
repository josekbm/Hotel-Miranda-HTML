const swiper = new Swiper('.swiper--handpicked-rooms', {
   direction: "horizontal",
   loop: true,

   navigation: {
    nextEl: nextButton,
    prevEl: prevButton, 
  },

   
});


  const swiperCoreFeatures = new Swiper('.swiper--core-features', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    pagination: {
      el: '.swiper-pagination--core-features',
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

   