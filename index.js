const he = require("he");

module.exports =  {
    theme: 'vuepress-theme-stack',
    extend: '@vuepress/theme-default',
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/plugin-nprogress',
        'smooth-scroll'
    ],

    extendPageData($page) {
        $page.content = getPageText($page);
    }
}

/**
 * Декодирует содержимое страницы из HTML в простой текст.
 *
 * @param  {object} page
 * @return {string}
 */
function getPageText(page) {
    if (!page._strippedContent)
        return "";

    const { html } = page._context.markdown.render(page._strippedContent);

    return he.decode(
        html
            .replace(/(<[^>]+>)+/g, " ")
            .replace(/^\s*#\s/gm, "")
    );
}