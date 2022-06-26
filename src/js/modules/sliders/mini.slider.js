import { Slider } from "./slider"

export class MiniSlider extends Slider {
    constructor(wrapper) {
        super(wrapper)
        this.autoNextSlide
    }

    addCssProprties() {
        this.wrapper.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `
    }

    bindTriggers() {
        this.next.forEach((n) => {
            n.addEventListener("click", (e) => {
                e.preventDefault()
                this.nextSlide()
            })
        })

        this.prev.forEach((p) => {
            p.addEventListener("click", (e) => {
                e.preventDefault()
                this.prevSlide()
            })
        })
    }

    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.wrapper.appendChild(this.slides[0])
            this.wrapper.appendChild(this.slides[0])
            this.wrapper.appendChild(this.slides[0])
            this.slides[this.slides.length - 3].classList.remove(this.animated)
            this.slides[this.slides.length - 3].classList.remove(this.activeClass)
        } else {
            this.wrapper.appendChild(this.slides[0])
            this.slides[this.slides.length - 1].classList.remove(this.animated)
            this.slides[this.slides.length - 1].classList.remove(this.activeClass)
        }

        this.slides[0].classList.add(this.animated)
        this.slides[0].classList.add(this.activeClass)
    }

    prevSlide() {
        if (this.slides[this.slides.length - 1].tagName == "BUTTON" && this.slides[this.slides.length - 2].tagName == "BUTTON") {
            this.wrapper.insertBefore(this.slides[this.slides.length - 3], this.slides[0])
            this.slides[1].classList.remove(this.animated)
            this.slides[1].classList.remove(this.activeClass)
        } else {
            this.wrapper.insertBefore(this.slides[this.slides.length - 1], this.slides[0])
        }

        this.slides[1].classList.remove(this.animated)
        this.slides[1].classList.remove(this.activeClass)
        this.slides[0].classList.add(this.animated)
        this.slides[0].classList.add(this.activeClass)
    }

    stopAutoSlider(elem) {
        elem.addEventListener("mouseover", () => {
            clearInterval(this.autoNextSlide)
        })

        elem.addEventListener("mouseout", () => {
            this.autoNextSlide = setInterval(() => this.nextSlide(), 5000)
        })
    }

    render() {
        this.init()
        this.addCssProprties()
        this.bindTriggers()

        if (this.autoPlay) {
            this.autoNextSlide = setInterval(() => this.nextSlide(), 5000)

            this.next.forEach((n) => {
                this.stopAutoSlider(n)
            })

            this.prev.forEach((p) => {
                this.stopAutoSlider(p)
            })

            for (let i = 0; i < this.slides.length; i++) {
                this.stopAutoSlider(this.slides[i])
            }
        }
    }
}
