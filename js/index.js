let activeSlide = 0;

const prev = document.getElementsByClassName('slide-prev-button')[0]
const next = document.getElementsByClassName('slide-next-button')[0]
const slide0 = document.getElementsByClassName('slide-0')[0]
const slide1 = document.getElementsByClassName('slide-1')[0]
const slide2 = document.getElementsByClassName('slide-2')[0]
const slide3 = document.getElementsByClassName('slide-3')[0]
const slideText0 = document.getElementsByClassName('slide-text')[0]
const slideText1 = document.getElementsByClassName('slide-text')[1]
const slideText2 = document.getElementsByClassName('slide-text')[2]
const slideText3 = document.getElementsByClassName('slide-text')[3]

const slides = [slide0, slide1, slide2, slide3]
const slideTexts = [slideText0, slideText1, slideText2, slideText3]

const increaseSlide = () => {
    if( activeSlide === 3){
        slide3.classList.toggle('active')
        slide0.classList.toggle('active')
        slideText3.classList.toggle('active')
        slideText0.classList.toggle('active')
        activeSlide = 0 
    }else{
        slides[activeSlide].classList.toggle('active')
        slideTexts[activeSlide].classList.toggle('active')
        activeSlide++
        slides[activeSlide].classList.toggle('active')
        slideTexts[activeSlide].classList.toggle('active')
    }
}

const startSliding = () => setInterval(increaseSlide, 4000)
const stopSliding = () => clearInterval(startSliding())

startSliding()

prev.addEventListener('click', () => {
    if( activeSlide === 0){
        slide0.classList.toggle('active')
        slide3.classList.toggle('active')
        slideText0.classList.toggle('active')
        slideText3.classList.toggle('active')
        activeSlide = 3 
    }else{
        slides[activeSlide].classList.toggle('active')
        slideTexts[activeSlide].classList.toggle('active')
        activeSlide--
        slides[activeSlide].classList.toggle('active')
        slideTexts[activeSlide].classList.toggle('active')
    }
    stopSliding()
    startSliding()
})

next.addEventListener('click', () => {
    increaseSlide()
})




