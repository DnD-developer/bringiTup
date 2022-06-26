'use strict'

import { MainSlider } from './modules/sliders/main-slider'
import { PlayerVideo } from './modules/playerVideo'

document.addEventListener('DOMContentLoaded', () => {
    const sliderIndex = new MainSlider({
        wrapper: '.page',
        btns: '.next',
        banner: {
            bannerBlock: '.hanson',
            bannerSlide: [3]
        },
        logo: '.sidecontrol > a'
    })
    sliderIndex.render()

    const firstPlayerIndex = new PlayerVideo('.play', '.overlay')
    firstPlayerIndex.init()
})
