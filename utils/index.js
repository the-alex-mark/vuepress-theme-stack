const he = require('he');
const { resolverSidebarRootItems } = require('./sidebar');

module.exports = {
    decodePageContent,
    resolverSidebarRootItems
}

/**
 * Декодирует содержимое страницы из **HTML** в простой текст.
 *
 * @param  {object} page Страница **VuePress**.
 * @return {string}
 */
function decodePageContent(page) {
    if (!page._strippedContent)
        return "";

    const { html } = page._context.markdown.render(page._strippedContent);

    return he.decode(
        html
            .replace(/(<[^>]+>)+/g, " ")
            .replace(/^\s*#\s/gm, "")
    );
}
