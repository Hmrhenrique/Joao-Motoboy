const observerText = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-text')
        } 
    })
})
const hiddenTextElements = document.querySelectorAll('.hidden-text')
hiddenTextElements.forEach((el) => observerText.observe(el))



const observerIcons = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-icons')
        } 
    })
})
const hiddenIconsElements = document.querySelectorAll('.hidden-icons')
hiddenIconsElements.forEach((el) => observerIcons.observe(el))



const observerLeftToRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left-to-right')
        } 
    })
})
const hiddenLeftToRightElements = document.querySelectorAll('.hidden-left-to-right')
hiddenLeftToRightElements.forEach((el) => observerLeftToRight.observe(el))