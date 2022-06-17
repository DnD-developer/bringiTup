export class Slider {
    constructor(page, btns, logo) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.logo = document.querySelectorAll(logo);
    }

    showSlides() {
        if (this.slideIndex < 1) {
            this.slideIndex = this.slides.length;
        }

        if (this.slideIndex > this.slides.length) {
            this.slideIndex = 1;
        }

        try {
            if (this.slideIndex == 3) {
                this.hanson.style.display = "none";
                this.hanson.classList.add("animate__animated");
                setTimeout(() => {
                    this.hanson.style.display = "block";
                    this.hanson.classList.add("animate__slideInUp");
                }, 3000);
            } else {
                this.hanson.classList.remove("animate__slideInUp");
            }
        } catch (error) {}

        for (let slide = 0; slide < this.slides.length; slide++) {
            this.slides[slide].classList.add("animate__animated");
            this.slides[slide].style.display = "none";
        }

        this.slides[this.slideIndex - 1].style.display = "block";
        this.slides[this.slideIndex - 1].classList.add("animate__fadeIn");
    }

    changeSlides(n) {
        this.showSlides((this.slideIndex += n));
    }

    render() {
        try {
            this.hanson = document.querySelector(".hanson");
        } catch (error) {}

        this.btns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                this.changeSlides(1);
            });
        });

        this.logo.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.changeSlides(0);
            });
        });
    }
}
