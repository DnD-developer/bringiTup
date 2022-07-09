export class Accordeon {
    constructor(wrapper, triggerSelector, msgSelector) {
        this.wrappers = document.querySelectorAll(wrapper)
        this.trigger = triggerSelector
        this.msg = msgSelector
    }

    bindTriggers(btn, msg) {
        btn.addEventListener(
            "click",
            (e) => {
                e.preventDefault()

                msg.style.height = "auto"
                let msgHeight = getComputedStyle(msg).height
                msg.style.height = 0

                setTimeout(() => {
                    msg.style.cssText = `
                margin-top: 20px;
                height: ${msgHeight}
            `
                }, 1)
            },
            { once: true }
        )
    }

    init() {
        this.wrappers.forEach((wrp) => {
            this.bindTriggers(wrp.querySelector(this.trigger), wrp.querySelector(this.msg))
        })
    }
}
