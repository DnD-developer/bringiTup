export class Differnce {
    constructor(officerOld, officerNew, items, plus) {
        this.officerOld = document.querySelector(officerOld)
        this.officerNew = document.querySelector(officerNew)
        this.itemsOld = this.officerOld.querySelectorAll(items)
        this.itemsNew = this.officerNew.querySelectorAll(items)
        this.plus = plus
        this.currentOld = 0
        this.currentNew = 0
    }

    hideItems(elements) {
        elements.forEach((el, i, elements) => {
            if (i != elements.length - 1) {
                el.classList.add("animate__animated")
                el.style.cssText = `
                    height: 0;
                    overflow: hidden;
                    visibility: hidden;
                    margin:0;
                `
            }
        })
    }

    bindTriggers(container, items, current) {
        container.querySelector(this.plus).addEventListener("click", () => {
            if (current == items.length - 2) {
                items[items.length - 1].classList.add("animate__animated")
                items[items.length - 1].style.setProperty("--animate-duration", ".3s")
                items[items.length - 1].classList.add("animate__fadeOut")

                setTimeout(() => {
                    items[items.length - 1].remove()
                }, 400)
            }

            items[current].style.cssText = `
                    height: 83px;
                    overflow: auto;
                    visibility: visible;
                     margin-top: 17px;
                `

            items[current].classList.add("animate__fadeIn")
            current += 1
        })
    }

    init() {
        this.hideItems(this.itemsOld)
        this.hideItems(this.itemsNew)
        this.bindTriggers(this.officerOld, this.itemsOld, this.currentOld)
        this.bindTriggers(this.officerNew, this.itemsNew, this.currentNew)
    }
}
