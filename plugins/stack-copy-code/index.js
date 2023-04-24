const path = require('path');
const {resolve} = require("path");

module.exports = (options, context) => ({
    define() {
        const {
            copySelector,
            copyMessage,
            toolTipMessage,
            duration
        } = options

        return {
            COPY_SELECTOR: copySelector || ['div[class*="language-"]', 'div[class*="aside-code"] aside'],
            COPY_MESSAGE: copyMessage || 'Copied successfully!',
            TOOL_TIP_MESSAGE: toolTipMessage || 'Copy to clipboard',
            DURATION: duration || 3000
        }
    },

    clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
