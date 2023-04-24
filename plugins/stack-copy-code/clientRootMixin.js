// import './styles/index.css'

export default {
    mounted() {
        const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
        if (!isMobile) {
            this.updateCopy()
        }
    },

    updated() {
        const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
        if (!isMobile) {
            this.updateCopy()
        }
    },

    methods: {
        updateCopy() {
            setTimeout(() => {
                if (typeof COPY_SELECTOR === 'string') {
                    document.querySelectorAll(COPY_SELECTOR).forEach(this.generateCopyButton)
                } else if (COPY_SELECTOR instanceof Array || Array.isArray(COPY_SELECTOR)) {
                    COPY_SELECTOR.forEach(item => {
                        document.querySelectorAll(item).forEach(this.generateCopyButton)
                    })
                }
            }, 1000)
        },
        generateCopyButton(parent) {
            if (parent.classList.contains('codecopy-enabled')) return
            const copyElement = document.createElement('button')
            copyElement.className = 'copy';
            // copyElement.setAttribute('data-balloon-text', 'Скопировать код')
            // copyElement.setAttribute('data-copied', 'Скопировано')
            // copyElement.setAttribute('data-balloon-position', 'left')
            copyElement.ariaLabel = 'Скопировать код';
            copyElement.setAttribute('data-copied', 'Скопировано')
            copyElement.setAttribute('data-balloon-pos', 'left')
            copyElement.innerHTML = '<div class="copy-icon"></div>';
            // copyElement.innerHTML = '<button class="copy" aria-label="Скопировать код" data-copied="Скопировано" data-balloon-pos="left">' +
            //     '    <div class="copy-icon"></div>' +
            //     '</button>'
            copyElement.addEventListener('click', () => {
                this.copyToClipboard(parent.innerText)
            })
            parent.appendChild(copyElement)
            parent.classList.add('codecopy-enabled')
        },
        copyToClipboard(str) {
            const el = document.createElement('textarea')
            el.value = str
            el.setAttribute('readonly', '')
            el.style.position = 'absolute'
            el.style.left = '-9999px'
            document.body.appendChild(el)
            const selected =
                document.getSelection().rangeCount > 0 ?
                    document.getSelection().getRangeAt(0) :
                    false
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
            if (selected) {
                document.getSelection().removeAllRanges()
                document.getSelection().addRange(selected)
            }
        }
    }
}
