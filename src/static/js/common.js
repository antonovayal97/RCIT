// ЕСЛИ ДОКУМЕНТ ПОЛНОСТЬЮ ЗАГРУЖЕН АНАЛОГ $(document).ready
document.addEventListener("DOMContentLoaded",(event) => {

  let header = document.querySelector('.header-main')
  let now = window.scrollY
  let mainContent = document.querySelector('main')
  mainContent.style = "padding-top:" + header.offsetHeight + 'px'
  document.addEventListener('scroll',() => {
    if(this.scrollY > now && this.scrollY > 250)
    {
    	header.classList.add('header-main-hidden')
    	now = this.scrollY
    }
    else
    {
    	header.classList.remove('header-main-hidden')
    	now = this.scrollY
    }
  })

  let homeObyavl = document.querySelectorAll('.section__cards_reactive')
  homeObyavl.forEach(item => {
    let homeObyavlName = item.querySelector('.home-card__name_reactive')
    let homeObyavlText = item.querySelector('.home-card__text_reactive')
    let miniCards = item.querySelectorAll('.home-mini-card')
    miniCards.forEach(item2 => {
      item2.addEventListener("click",() => {
        let miniCardName = item2.querySelector('.home-mini-card__text')
        let miniCardText = item2.querySelector('.home-mini-card__hidden')
        homeObyavlName.innerHTML = "<span>" + miniCardName.innerText + "</span>"
        homeObyavlText.innerHTML = "<p>" + miniCardText.innerText + "</p>"
      })
    });
  });

  let accords = document.querySelectorAll('.accord')
  accords.forEach(item => {
    let inside = item.querySelector('.accord-inside')
    let outside = item.querySelector('.accord-outside')
    let arrow = item.querySelector('.accord-arrow')
    outside.addEventListener('click',() => {
      item.classList.toggle('accord-active')
      inside.classList.toggle('accord-inside-active')
      arrow.classList.toggle('accord-arrow-active')
    })
  })

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
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      744:
      {
        cssMode: false,
      }
    }
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
  cssMode: true,
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
      cssMode: false,
    }
  }
  });

  setTimeout(() => {
    let headerNotification = new Swiper(".header__notifications-swiper", {
      slidesPerView: "auto",
      loop: true,
      speed: 20000,
      autoplay:{
        delay: 0
      },
    });
    if(document.querySelector('.page-header__btns-swiper'))
    {
      let pageHeader = new Swiper(".page-header__btns-swiper", {
        slidesPerView: "auto",
        cssMode: true,
        pagination: {
          el: ".page-header__swiper-paggination",
          type: "progressbar",
        },
        breakpoints:{
          744:
          {
            cssMode: false,
          }
        }
      });

      window.addEventListener('resize', () => {
        setTimeout(() => {
              pageHeader.destroy();
              pageHeader = new Swiper(".page-header__btns-swiper", {
                slidesPerView: "auto",
                cssMode: true,
                pagination: {
                el: ".page-header__swiper-paggination",
                type: "progressbar",
              },
                breakpoints:{
                  744:
                  {
                    cssMode: false,
                  }
                }
              });
        },10)
      });
    }

    let select = document.querySelectorAll('.page__select')
    select.forEach(item => {
      let select_inside = item.querySelector('.page__select-inside')
      let select_outside = item.querySelector('.page__select-outside')
      let select_arrow = item.querySelector('.page__select-arrow')
      select_outside.addEventListener('click',() => {
        item.classList.toggle('page__select_active')
        select_inside.classList.toggle('page__select-inside_active')
        select_arrow.classList.toggle('page__select-arrow_active')
      })
      select_inside.addEventListener('click',() => {
        item.classList.toggle('page__select_active')
        select_inside.classList.toggle('page__select-inside_active')
        select_arrow.classList.toggle('page__select-arrow_active')
      })
    })

    let sortSelect = document.querySelectorAll('.news__sort-select')
    sortSelect.forEach(item => {
      let sort_inside = item.querySelector('.news__select-inside')
      let sort_outside = item.querySelector('.news__select-outside')
      sort_outside.addEventListener('click',() => {
        item.classList.toggle('news__sort-select_active')
      })
      sort_inside.addEventListener('click',() => {
        item.classList.toggle('news__sort-select_active')
      })
    })
  }, 1)
  let aboutStage = new Swiper(".about-stage__swiper", {
    slidesPerView: "auto",
    allowTouchMove: true,
    cssMode: true,
    pagination: {
      el: ".about-stage__swiper-paggination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".about-stage__swiper-right",
      prevEl: ".about-stage__swiper-left",
    },
    breakpoints:{
      744:
      {
        allowTouchMove: true,
        cssMode: false,
      }
    }
  });

  let aboutStageWrap = document.querySelector('.about-stage')
  let aboutWrapper = document.querySelector('.about-stage__swiper-wrapper')

  if(aboutStageWrap)
  {
    aboutStageWrap.style.height = aboutWrapper.scrollWidth + 75 + 'px'
  }

  // МОДАЛКИ НАЧАЛО
  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
  });
  // МОДАЛКИ КОНЕЦ


  let calendarSwiper = new Swiper(".calendar__swiper", {
    freeMode: true,
    cssMode: true,
    slidesPerView: "auto",
    pagination: {
      el: ".calendar__swiper-paggination",
      type: "progressbar",
    },
  });


  let calendar = new Vue({
    el: '#calendar',
    data() {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return {
        isMounted: false,
        selectMonth: 1,
        selectYear: 2023,
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
    methods:{
      nextMonth()
      {
        this.$refs.calendar.move(1)
        this.selectMonth = this.$refs.calendar.pages[0].month
      },
      prevMonth()
      {
        this.$refs.calendar.move(-1)
        this.selectMonth = this.$refs.calendar.pages[0].month
      },
      changeYear(year)
      {
        this.selectYear = year
        this.$refs.calendar.move({month: parseInt(this.selectMonth),year: parseInt(year)})
      },
      changeMonth(month)
      {
        this.selectMonth = month
        this.$refs.calendar.move({month: parseInt(month),year: parseInt(this.selectYear)})
      }
    },
    computed:{
      thisMonth: function () {
        if(this.isMounted)
        {
          return this.$refs.calendar.pages[0].monthLabel
        }
        return
      },
      thisYear: function () {
        if(this.isMounted)
        {
          return this.$refs.calendar.pages[0].yearLabel
        }
        return
      },
    },
    mounted(){
      this.isMounted = true
      this.selectMonth = this.$refs.calendar.pages[0].month
      this.selectYear = this.$refs.calendar.pages[0].year
      console.log(this.$refs.calendar)
    }
  })
})
