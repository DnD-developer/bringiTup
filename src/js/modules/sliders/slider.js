export class Slider {
    constructor({ wrapper = null, next = null, prev = null, logo = null, activeClass = "", autoPlay = false, animated = ".animate__fadeIn", banner: { bannerBlock = null, bannerSlide = [] } = {} } = {}) {
        this.wrapper = document.querySelector(wrapper)
        this.slideIndex = 1
        try {
            this.slides = this.wrapper.children
        } catch (error) {}
        this.logo = document.querySelectorAll(logo)
        this.activeClass = activeClass.replace(/\./, "")
        this.autoPlay = autoPlay
        this.animated = animated.replace(/\./, "")
        this.next = document.querySelectorAll(next)
        this.prev = document.querySelectorAll(prev)
        this.bannerBlock = document.querySelector(bannerBlock)
        this.bannerSlide = bannerSlide
    }

    init() {
        if (this.wrapper) {
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].classList.add("animate__animated")
            }
            if (this.activeClass) {
                this.slides[0].classList.add(this.activeClass)
            }
        }
    }
}
