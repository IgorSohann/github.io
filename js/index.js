const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  });
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
  });

const formBtn = document.querySelector('.menu__btn-screav');
const form = document.querySelector('.form');
  
formBtn.addEventListener('click', () => {
      form.classList.toggle('form--active');
  });

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
  element.addEventListener('click', oopen);
})

function oopen(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
};