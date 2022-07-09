export class PlayerVideo {
    constructor(triggers, modal, wrapperPlayer = null) {
        this.triggers = document.querySelectorAll(triggers)
        this.modal = document.querySelector(modal)
        this.close = this.modal.querySelector(".close")
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
        this.wrapperPlayer = wrapperPlayer
    }

    bindTriggers() {
        this.triggers.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault()
                if (!btn.querySelector(".play__circle").classList.contains("closed")) {
                    this.activePlay = btn

                    if (document.querySelector("iframe#frame")) {
                        this.modal.style.display = "flex"

                        if (this.path != btn.dataset.url) {
                            this.path = btn.dataset.url
                            this.video.loadVideoById(this.path)
                        }
                    } else {
                        this.path = btn.dataset.url
                        this.createPlayer(this.path)
                    }
                }
            })
        })
    }

    bindClose() {
        this.close.addEventListener("click", (e) => {
            e.preventDefault()
            this.video.stopVideo()
            this.modal.style.display = "none"
        })
    }

    createPlayer(url) {
        this.video = new YT.Player("frame", {
            height: "100%",
            width: "100%",
            videoId: url,
            events: {
                onStateChange: this.onPlayerStateChange
            }
        })
        this.modal.style.display = "flex"
    }

    onPlayerStateChange(state) {
        if (this.wrapperPlayer) {
            if (state.data === 0) {
                const videoWrapper = this.activePlay.closest(this.wrapperPlayer).nextElementSibling,
                    iconPlay = this.activePlay.querySelector("svg").cloneNode(true),
                    playBtn = videoWrapper.querySelector(".play__circle"),
                    playText = videoWrapper.querySelector(".play__text")

                if (playBtn.classList.contains("closed")) {
                    videoWrapper.style.cssText = `
                filter: none;
                opacity: 1;
                `
                    playText.textContent = "play Video"
                    playText.classList.remove("attention")
                    playBtn.classList.remove("closed")
                    playBtn.querySelector(".lock").remove()
                    playBtn.appendChild(iconPlay)
                }
            }
        }
    }

    init() {
        if (this.triggers.length > 0) {
            let tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"
            let firstScriptTag = document.getElementsByTagName("script")[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            this.bindTriggers()
            this.bindClose()
        }
    }
}
