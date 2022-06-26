import { Slider } from "./slider"

export class MainSlider extends Slider {
    constructor(wrapper) {
        super(wrapper)
    }

    logoHome() {
        this.logo.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault()
                this.slideIndex = 1
                this.changeSlides(0)
            })
        })
    }

    showSlides() {
        if (this.slideIndex < 1) {
            this.slideIndex = this.slides.length
        }

        if (this.slideIndex > this.slides.length) {
            this.slideIndex = 1
        }

        if (this.bannerBlock) {
            if (this.bannerSlide.includes(this.slideIndex)) {
                this.bannerBlock.style.display = "none"
                this.bannerBlock.classList.add("animate__animated")
                setTimeout(() => {
                    this.bannerBlock.style.display = "block"
                    this.bannerBlock.classList.add("animate__slideInUp")
                }, 3000)
            } else {
                this.bannerBlock.classList.remove("animate__slideInUp")
            }
        }

        for (let slide = 0; slide < this.slides.length; slide++) {
            this.slides[slide].style.display = "none"
        }

        this.slides[this.slideIndex - 1].style.display = "block"
        this.slides[this.slideIndex - 1].classList.add(this.animated)
    }

    changeSlides(n) {
        this.slideIndex += n
        this.showSlides()
    }

    render() {
        this.init()

        this.logoHome()

        this.changeSlides(0)

        this.btns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault()
                this.changeSlides(1)
            })
        })
    }
}
