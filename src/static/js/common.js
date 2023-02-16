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


// МОДАЛКИ НАЧАЛО
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});
// МОДАЛКИ КОНЕЦ

})
