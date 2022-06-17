"use strict";

import { Slider } from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
    const sliderIndex = new Slider(".page", ".next", ".sidecontrol > a");
    sliderIndex.render();
});
