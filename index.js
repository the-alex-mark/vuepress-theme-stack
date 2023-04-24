const path = require('path');
const utils = require('./scripts/utils')

module.exports = {
    theme: 'vuepress-theme-stack',
    extend: '@vuepress/theme-default',
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/plugin-nprogress',
        require('./plugins/stack-copy-code')
        // 'one-click-copy'
    ],
    clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
    enhanceAppFiles: [
        path.resolve(__dirname, 'scripts/enhance/home.js'),
        path.resolve(__dirname, 'scripts/enhance/override.js'),
        path.resolve(__dirname, 'scripts/enhance/modules.js'),
        path.resolve(__dirname, 'scripts/enhance/smooth-scroll.js')
    ],

    extendPageData($page) {
        $page.content = utils.decodePageContent($page);
    }
}
