// ЕСЛИ ДОКУМЕНТ ПОЛНОСТЬЮ ЗАГРУЖЕН АНАЛОГ $(document).ready
document.addEventListener("DOMContentLoaded",(event) => {
//
// let header = document.querySelector('.header-main')
// let now = window.scrollY
// document.addEventListener('scroll',() => {
// 	if(this.scrollY > now && this.scrollY > 250)
// 	{
// 		header.classList.add('header-main-hidden')
// 		now = this.scrollY
// 	}
// 	else
// 	{
// 		header.classList.remove('header-main-hidden')
// 		now = this.scrollY
// 	}
// })

// АККАРДИОН НАЧАЛО
let accords = document.querySelectorAll('.accord')
console.log(accords)
accords.forEach(item => {
  console.log(item)
  let inside = item.querySelector('.accord-inside')
  let outside = item.querySelector('.accord-outside')
  let arrow = item.querySelector('.accord-arrow')
  outside.addEventListener('click',() => {
    inside.classList.toggle('accord-inside-active')
    arrow.classList.toggle('accord-arrow-active')
  })
})
// АККАРДИОН КОНЕЦ
let menuFirst = document.querySelectorAll('.header__burger-inside-main-menu-first')
let menuSecondAll = document.querySelectorAll('.header__burger-inside-main-menu-second')
menuFirst.forEach(item => {
  let menuSecond = item.querySelector('.header__burger-inside-main-menu-second')
  let menuFirstName = item.querySelector('.header__burger-inside-main-menu-first-name')
  menuFirstName.addEventListener('click',() => {
    let hasCls = item.classList.contains('header__burger-inside-main-menu-first-active')
    menuFirst.forEach(item => {
      item.classList.remove('header__burger-inside-main-menu-first-active')
    });
    if(hasCls)
    {
        item.classList.remove('header__burger-inside-main-menu-first-active')
    }
    else
    {
        item.classList.add('header__burger-inside-main-menu-first-active')
    }
  })
});

let menuOpenBtn = document.querySelector('.header__menu-btn')
let menuWindow = document.querySelector('.header__burger-inside')
let menuCloseBtn = document.querySelector('.header__burger-inside-close')
menuOpenBtn.addEventListener('click',() => {
  menuWindow.classList.toggle('header__burger-active')
})
menuCloseBtn.addEventListener('click',() => {
  menuWindow.classList.remove('header__burger-active')
})

let mainBanner = new Swiper(".main-banner-swiper", {
  loop: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
let homePartners = new Swiper(".home-parnters", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  speed: 10000,
  autoplay:{
    delay: 0
  }
    });
let homeUslugi = new Swiper(".home-uslugi", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".home-uslugi__slide-btn-next",
    prevEl: ".home-uslugi__slide-btn-prev",
  },
    });
// МОДАЛКИ НАЧАЛО
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});
// МОДАЛКИ КОНЕЦ

})
