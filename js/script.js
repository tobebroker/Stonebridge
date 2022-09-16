if(document.querySelectorAll('.slides').length){
new Swiper('.slides',{
  pagination: {
    el: '.slides__pagination',
    clickable: true,
  },
  slidesPerView: 4,
  centeredSlides: true,
  loop: false,
  spaceBetween: 50,
  breakpoints: {
      992: {
        slidesPerView: 4,
        centeredSlides: false,
        loop: true,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 2,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
      },
      
    },
});
}

if(document.querySelectorAll('.middle__slider1').length){

new Swiper('.middle__slider1',{
  pagination: {
    el: '.middle__slider1-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  spaceBetween: 50,
  breakpoints: {
      992: {
        slidesPerView: 2,
        centeredSlides: false,
        loop: true,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
      },
      
    },
});  
}

if(document.querySelectorAll('.middle__slider2').length){
new Swiper('.middle__slider2',{
  pagination: {
    el: '.middle__slider2-pagination',
    clickable: true,
  },
  slidesPerView: 4,
  centeredSlides: true,
  loop: false,
  spaceBetween: 50,
  breakpoints: {
      992: {
        slidesPerView: 4,
        centeredSlides: false,
        loop: true,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 3,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
      },
      
    },
});
}

if(document.querySelectorAll('.portfolio1__slider').length){
new Swiper('.portfolio1__slider',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  spaceBetween: 50,
  breakpoints: {
  992: {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    spaceBetween: 50,
  },

  320: {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    spaceBetween: 70,
  },

  },
});
}

if(document.querySelectorAll('.bottom__slider').length){
new Swiper('.bottom__slider',{
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  spaceBetween: 50,
  navigation: {
    nextEl: '.bottom__slider-next',
    prevEl: '.bottom__slider-prev',
  },
  breakpoints: {
  992: {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    spaceBetween: 50,
  },

  320: {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    spaceBetween: 70,
  },
  },
});
}


if(document.querySelectorAll('.services__modal-close').length){
$(document).ready(function(){

$('.services__provide-button button').on("click", function(){
  $('.overlay').show();
});

$('.services__provide-button a').on("click", function(){
  $('.overlay').show();
});

$('.services__button').on("click", function(){
  $('.overlay').show();
});

$('.services__modal-close').on("click", function(){
  $('.overlay').hide();
});

});
}

if(document.querySelectorAll('.faq__accordion-inner .accordion').length){

var acc = document.querySelectorAll(".faq__accordion-inner .accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
}

let btnMenuOpen = document.querySelectorAll('.btn-mobile-menu-open')
let header = document.querySelectorAll('.menu__outside')
let overlay = document.querySelector('#overlay')

btnMenuOpen[0].addEventListener('click', () => {
        header[0].classList.add('menu-opened')
        document.body.style.overflow = 'hidden'
})

overlay.addEventListener('click', () => {
        header[0].classList.remove('menu-opened')
        document.body.style.overflow = 'auto'
})