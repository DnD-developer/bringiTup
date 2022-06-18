"use strict";

import { Slider } from "./modules/slider";
import { PlayerVideo } from "./modules/playerVideo";

document.addEventListener("DOMContentLoaded", () => {
    const sliderIndex = new Slider(".page", ".next", ".sidecontrol > a");
    sliderIndex.render();

    const firstPlayerIndex = new PlayerVideo(".play", ".overlay");
    firstPlayerIndex.init();
});
