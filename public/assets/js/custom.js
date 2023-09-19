;(function () {
  'use strict'

  // Menu Dropdown Toggle
  const menuTrigger = document.querySelector('.menu-trigger')
  const nav = document.querySelector('.header-area .nav')

  menuTrigger.addEventListener('click', function () {
    const isActive = this.classList.contains('active')
    if (isActive) {
      this.classList.remove('active')
      if (nav) {
        nav.classList.remove('active')
      }
    } else {
      this.classList.add('active')
      if (nav) {
        nav.classList.add('active')
      }
    }
  })

  let show = false
  const preloader = document.getElementById('preloader')
  function removeCover() {
    if (!show) {
      preloader.classList.add('preloader-hide')
    }
    show = true
  }
  // Page loading animation
  window.onload = () => {
    removeCover()
  }
  setTimeout(() => {
    if (!show) {
      removeCover()
    }
  }, 1500)

  const header = document.getElementById('header-area')
  const main = document.getElementById('main-area')
  main.addEventListener('scroll', function () {
    let top = 30 - main.scrollTop
    if (top < 0) {
      top = 0
    }
    header.style.top = `${top}px`
  })
})()
