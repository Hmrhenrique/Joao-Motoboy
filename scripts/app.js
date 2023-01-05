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

var dropdownSwitch = 0
function dropdown() {
    dropdownSwitch ++
    let dropdown = document.querySelector('.nav__dropdown')

    if (dropdownSwitch >= 2){
        dropdownSwitch = 0
    }

    if (dropdownSwitch === 0){
        dropdown.classList.remove('show--dropdown--items')
    } else {
        dropdown.classList.add('show--dropdown--items')
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