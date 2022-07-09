export class Requestion {
    constructor(url, form) {
        this.forms = document.querySelectorAll(form)
        this.url = url
        this.message = {
            loading: "Загрузка...",
            success: "Спасибо! Скоро мы с вами свяжемся!",
            failure: "Что-то пошло не так..."
        }
    }

    createStatusMessage(form) {
        let statusMessage = document.createElement("div")
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `
        form.parentNode.appendChild(statusMessage)
        return statusMessage
    }

    bindTrigger(submit, inputs) {
        submit.addEventListener("submit", (e) => {
            e.preventDefault()
            const statusMessage = this.createStatusMessage(submit),
                formData = new FormData(submit)

            statusMessage.textContent = this.message.loading

            this.req(formData)
                .then((res) => {
                    console.log(res)
                    statusMessage.textContent = this.message.success
                })
                .catch((error) => {
                    console.log(error)
                    statusMessage.textContent = this.message.failure
                })
                .finally(() => {
                    this.clearInput(inputs)
                    setTimeout(() => statusMessage.remove(), 3000)
                })
        })
    }

    clearInput(inputs) {
        inputs.forEach((input) => {
            input.value = ""
        })
    }

    checkMail() {
        const mailInputs = document.querySelectorAll("[type = 'email']")

        mailInputs.forEach((mail) => {
            mail.addEventListener("keypress", (e) => {
                if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
                    e.preventDefault()
                }
            })
        })
    }

    mask(maskMatrix, type) {
        let setCursorPosition = (pos, elem) => {
            elem.focus()

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos)
            } else if (elem.createTextRange) {
                let range = elem.createTextRange()

                range.collapse(true)
                range.moveEnd("character", pos)
                range.moveStart("character", pos)
                range.select()
            }
        }

        function createMask(event) {
            let matrix = maskMatrix,
                i = 0,
                j = 0,
                k = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "")

            if (def.length >= val.length) {
                val = def
            }

            this.value = matrix.replace(/./g, (a) => {
                if (/[_\d\w]/.test(a) && i < val.length) {
                    i++
                    j++
                    k++
                    return val[i - 1]
                } else if (i >= val.length) {
                    j++
                    return matrix[j - 1]
                } else {
                    j++
                    k++
                    return a
                }
            })

            if (event.type === "blur") {
                if (val.length <= 1) {
                    this.value = ""
                }
            } else {
                setCursorPosition(k, this)
            }
        }

        let inputs = document.querySelectorAll(`[name = ${type} ]`)

        inputs.forEach((input) => {
            input.addEventListener("input", createMask)
            input.addEventListener("focus", createMask)
            input.addEventListener("blur", createMask)
        })
    }

    async req(form) {
        let res = await fetch(this.url, {
            method: "POST",
            body: form
        })
        return await res.text()
    }

    init() {
        this.forms.forEach((form) => {
            const inputs = form.querySelectorAll("input")

            this.bindTrigger(form, inputs)
        })

        this.checkMail()
        this.mask("+1 (___) ___ - ____", "phone")
        this.mask("dd.mm.gggg", "date")
    }
}
