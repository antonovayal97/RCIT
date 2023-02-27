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
    item.classList.toggle('accord-active')
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
  spaceBetween: 16,
  loop: true,
  speed: 10000,
  autoplay:{
    delay: 0
  },
  breakpoints:{
    744:
    {
      spaceBetween: 20,
    }
  }
    });
let homeUslugi = new Swiper(".home-uslugi", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
  navigation: {
    nextEl: ".home-uslugi__slide-btn-next",
    prevEl: ".home-uslugi__slide-btn-prev",
  },
  breakpoints:{
    744:
    {
      spaceBetween: 20,
    }
  }
    });
let pageHeader = new Swiper(".page-header__btns-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  allowTouchMove: true,
  breakpoints:{
    1220:
    {
      allowTouchMove: false,
      spaceBetween: 20,
    },
    744:
    {
      allowTouchMove: true,
      spaceBetween: 20,
    }
  }
    });
let aboutStage = new Swiper(".about-stage__swiper", {
  slidesPerView: "auto",
  pagination: {
  el: ".about-stage__swiper-paggination",
  type: "progressbar",
},
navigation: {
        nextEl: ".about-stage__swiper-right",
        prevEl: ".about-stage__swiper-left",
      },
    });
let aboutStageWrap = document.querySelector('.about-stage')
let aboutWrapper = document.querySelector('.about-stage__swiper-wrapper')

if(aboutStageWrap)
{
  aboutStageWrap.style.height = aboutWrapper.scrollWidth + 'px'
}

// МОДАЛКИ НАЧАЛО
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});
// МОДАЛКИ КОНЕЦ
let calendar = new Vue({
        el: '#calendar',
        data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWWW',
        title: "MMMM"
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Министерство труда и социального развития РС(Я)",
            time: "15:00",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-indigo-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-teal-500 text-white',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Министерство труда и социального развития РС(Я)",
            time: "15:00",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-orange-500 text-white',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Министерство труда и социального развития РС(Я)",
            time: "15:00",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 25),
        },
        {
          key: 9,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, 2, 1),
        },
        {
          key: 10,
          customData: {
            title: 'Министерство труда и социального развития РС(Я)',
            time: "15:00",
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 1),
        },
      ],
    };
  },
  methods:
  {
    changeMonth()
    {
      this.$refs.calendar.move(5)
    }
  }
      })
})
