export class PlayerVideo {
    constructor(triggers, modal) {
        this.triggers = document.querySelectorAll(triggers);
        this.modal = document.querySelector(modal);
        this.close = this.modal.querySelector(".close");
    }

    bindTriggers() {
        this.triggers.forEach((btn) => {
            btn.addEventListener("click", (e) => {
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
        this.close.addEventListener("click", (e) => {
            e.preventDefault();
            this.video.stopVideo();
            this.modal.style.display = "none";
        });
    }

    createPlayer(url) {
        this.video = new YT.Player("frame", {
            height: "100%",
            width: "100%",
            videoId: url,
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
