"use strict"

import { MainSlider } from "./modules/sliders/main-slider"
import { MiniSlider } from "./modules/sliders/mini.slider"
import { PlayerVideo } from "./modules/playerVideo"
import { Differnce } from "./modules/difference"
import { Requestion } from "./modules/request"

document.addEventListener("DOMContentLoaded", () => {
    const sliderIndex = new MainSlider({
        wrapper: ".page",
        btns: ".next",
        banner: {
            bannerBlock: ".hanson",
            bannerSlide: [3]
        },
        logo: ".sidecontrol > a"
    })
    sliderIndex.render()

    const sliderShowUp = new MiniSlider({
        wrapper: ".showup__content-slider",
        prev: ".showup__prev",
        next: ".showup__next",
        activeClass: ".card-active",
        animated: ".animate__slideInRight"
    })
    sliderShowUp.render()

    const sliderModules = new MiniSlider({
        wrapper: ".modules__content-slider",
        prev: ".modules__info-btns .slick-prev",
        next: ".modules-slider-next",
        activeClass: ".card-active",
        animated: ".animate__slideInRight",
        autoPlay: true
    })
    sliderModules.render()

    const sliderFeed = new MiniSlider({
        wrapper: ".feed__slider",
        prev: ".feed__slider .slick-prev",
        next: ".feed__slider .slick-next",
        activeClass: ".feed__item-active",
        animated: ".animate__slideInLeft"
    })
    sliderFeed.render()

    const firstPlayerIndex = new PlayerVideo(".play", ".overlay")
    firstPlayerIndex.init()

    new Differnce(".officerold", ".officernew", ".officer__card-item", ".plus__content").init()

    new Requestion("../assets/question.php", "form").init()
})
