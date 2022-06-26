export class Slider {
    constructor({ wrapper = null, btns = null, next = null, prev = null, logo = null, activeClass = '', autoPlay = false, animated = 'animate__fadeIn', banner: { bannerBlock = null, bannerSlide = [] } } = {}) {
        this.wrapper = document.querySelector(wrapper)
        this.btns = document.querySelectorAll(btns)
        this.slideIndex = 1
        this.slides = this.wrapper.children
        this.logo = document.querySelectorAll(logo)
        this.activeClass = activeClass
        this.autoPlay = autoPlay
        this.animated = animated
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.bannerBlock = document.querySelector(bannerBlock)
        this.bannerSlide = bannerSlide
    }

    init() {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].closest('BUTTON')) {
                this.slides.splice(i, 1)
                i--
            }
        }
    }
}
