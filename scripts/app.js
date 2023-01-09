const navLinks = document.querySelectorAll('header a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 16*5.5;
  smoothScrollTo(0, distanceFromTheTop, 700);
}

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

const observerText = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show--text')
        } 
    })
})
const hiddenTextElements = document.querySelectorAll('.hidden--text')
hiddenTextElements.forEach((el) => observerText.observe(el))



const observerIcons = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show--icons')
        } 
    })
})
const hiddenIconsElements = document.querySelectorAll('.hidden--icons')
hiddenIconsElements.forEach((el) => observerIcons.observe(el))



const observerLeftToRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show--left--to--right')
        } 
    })
})
const hiddenLeftToRightElements = document.querySelectorAll('.hidden--left--to--right')
hiddenLeftToRightElements.forEach((el) => observerLeftToRight.observe(el))

var navDropdownSwitch = 0
function navDropdown() {
    navDropdownSwitch ++
    let navDropdown = document.querySelector('.nav__dropdown')

    if (navDropdownSwitch%2 === 0){
        navDropdown.classList.remove('nav--show--dropdown--items')
    } else {
        navDropdown.classList.add('nav--show--dropdown--items')
    }
}

var WhatsAppIconDropdownSwitch = 0
function WhatsAppDropdown() {
    WhatsAppIconDropdownSwitch ++
    let whatsAppDropdown = document.querySelectorAll('.WhatsApp__Icon__dropdown')

    if (WhatsAppIconDropdownSwitch%2 === 0){
        whatsAppDropdown.forEach(el => {
            el.classList.remove('WhatsApp--icon--show--dropdown--items')
        })
    } else {
        whatsAppDropdown.forEach(el => {
            el.classList.add('WhatsApp--icon--show--dropdown--items')
        })
    }
}


var cardSlideItemIndex = 0
function CardSlideIncrease(){

    cardSlideItemIndex ++
    let cardSlideItems = document.querySelectorAll('.card__slide__item')

    if (cardSlideItemIndex === 3){
        cardSlideItemIndex = 0
        cardSlideItems[2].classList.remove('show--card--slide--item')
    }

    cardSlideItems[cardSlideItemIndex].classList.add('show--card--slide--item')
    cardSlideItems[cardSlideItemIndex - 1].classList.remove('show--card--slide--item')

}

function CardSlideDecrease(){

    cardSlideItemIndex --
    let cardSlideItems = document.querySelectorAll('.card__slide__item')

    if (cardSlideItemIndex === -1){
        cardSlideItemIndex = 2
        cardSlideItems[0].classList.remove('show--card--slide--item')
    }
    
    cardSlideItems[cardSlideItemIndex].classList.add('show--card--slide--item')
    cardSlideItems[cardSlideItemIndex + 1].classList.remove('show--card--slide--item')
}