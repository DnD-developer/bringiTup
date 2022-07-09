export class Download {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers)
        this.path = "assets/img/Bitmap.jpg"
    }

    downloadItem(path) {
        const link = document.createElement("a")

        link.setAttribute("href", path)
        link.setAttribute("download", "Bitmap.jpg")
        link.style.display = "none"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    init() {
        this.triggers.forEach((trg) => {
            trg.addEventListener("click", (e) => {
                e.preventDefault()
                this.downloadItem(this.path)
            })
        })
    }
}
