const path = require('path');
const utils = require('./utils')

module.exports = {
    theme: 'vuepress-theme-stack',
    extend: '@vuepress/theme-default',
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/plugin-nprogress'
    ],
    clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhance/override.js'),
        path.resolve(__dirname, 'enhance/modules.js'),
        path.resolve(__dirname, 'enhance/smooth-scroll.js')
    ],

    extendPageData($page) {
        $page.content = utils.decodePageContent($page);
    }
}
