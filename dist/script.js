/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders_main_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders/main-slider */ "./src/js/modules/sliders/main-slider.js");
/* harmony import */ var _modules_playerVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playerVideo */ "./src/js/modules/playerVideo.js");




document.addEventListener('DOMContentLoaded', () => {
  const sliderIndex = new _modules_sliders_main_slider__WEBPACK_IMPORTED_MODULE_0__["MainSlider"]({
    wrapper: '.page',
    btns: '.next',
    banner: {
      bannerBlock: '.hanson',
      bannerSlide: [3]
    },
    logo: '.sidecontrol > a'
  });
  sliderIndex.render();
  const firstPlayerIndex = new _modules_playerVideo__WEBPACK_IMPORTED_MODULE_1__["PlayerVideo"]('.play', '.overlay');
  firstPlayerIndex.init();
});

/***/ }),

/***/ "./src/js/modules/playerVideo.js":
/*!***************************************!*\
  !*** ./src/js/modules/playerVideo.js ***!
  \***************************************/
/*! exports provided: PlayerVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerVideo", function() { return PlayerVideo; });
class PlayerVideo {
  constructor(triggers, modal) {
    this.triggers = document.querySelectorAll(triggers);
    this.modal = document.querySelector(modal);
    this.close = this.modal.querySelector(".close");
  }

  bindTriggers() {
    this.triggers.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();

        if (document.querySelector("iframe#frame")) {
          this.modal.style.display = "flex";
        } else {
          this.createPlayer(btn.dataset.url);
        }
      });
    });
  }

  bindClose() {
    this.close.addEventListener("click", e => {
      e.preventDefault();
      this.video.stopVideo();
      this.modal.style.display = "none";
    });
  }

  createPlayer(url) {
    this.video = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: url
    });
    this.modal.style.display = "flex";
  }

  init() {
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindClose();
  }

}

/***/ }),

/***/ "./src/js/modules/sliders/main-slider.js":
/*!***********************************************!*\
  !*** ./src/js/modules/sliders/main-slider.js ***!
  \***********************************************/
/*! exports provided: MainSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSlider", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["Slider"] {
  constructor(wrapper) {
    super(wrapper);
  }

  logoHome() {
    this.logo.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.changeSlides(0);
      });
    });
  }

  showSlides() {
    if (this.slideIndex < 1) {
      this.slideIndex = this.slides.length;
    }

    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }

    if (this.bannerBlock) {
      if (this.bannerSlide.includes(this.slideIndex)) {
        this.bannerBlock.style.display = 'none';
        this.bannerBlock.classList.add('animate__animated');
        setTimeout(() => {
          this.bannerBlock.style.display = 'block';
          this.bannerBlock.classList.add('animate__slideInUp');
        }, 3000);
      } else {
        this.bannerBlock.classList.remove('animate__slideInUp');
      }
    }

    for (let slide = 0; slide < this.slides.length; slide++) {
      this.slides[slide].classList.add('animate__animated');
      this.slides[slide].style.display = 'none';
    }

    this.slides[this.slideIndex - 1].style.display = 'block';
    this.slides[this.slideIndex - 1].classList.add(this.animated);
  }

  changeSlides(n) {
    this.slideIndex += n;
    this.showSlides();
  }

  render() {
    this.init();
    this.logoHome();
    this.changeSlides(0);
    this.btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.changeSlides(1);
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/sliders/slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliders/slider.js ***!
  \******************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
class Slider {
  constructor({
    wrapper = null,
    btns = null,
    next = null,
    prev = null,
    logo = null,
    activeClass = '',
    autoPlay = false,
    animated = 'animate__fadeIn',
    banner: {
      bannerBlock = null,
      bannerSlide = []
    }
  } = {}) {
    this.wrapper = document.querySelector(wrapper);
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
    this.slides = this.wrapper.children;
    this.logo = document.querySelectorAll(logo);
    this.activeClass = activeClass;
    this.autoPlay = autoPlay;
    this.animated = animated;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.bannerBlock = document.querySelector(bannerBlock);
    this.bannerSlide = bannerSlide;
  }

  init() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].closest('BUTTON')) {
        this.slides.splice(i, 1);
        i--;
      }
    }
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map