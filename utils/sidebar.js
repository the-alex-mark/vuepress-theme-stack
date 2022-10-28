module.exports = {
    resolverSidebarRootItems
}

/**
 * Возвращает сформированные ссылки для боковой панели на главной странице.
 *
 * @param  $config Конфигурация.
 * @return {Object|{}}
 */
function resolverSidebarRootItems($config) {
    let $sidebar = $config.sidebar;
    let $home    = $config.home || [];

    if ($home.length === 0)
        return $sidebar;

    $sidebar['/'] = [];
    for (const chapter of $home.items) {
        if (chapter.sidebar === false)
            continue;

        let children = [];
        for (const item of chapter.items) {
            if (item.type !== 'card' && item.link) {
                children.push({
                    title: item.title,
                    path: item.link
                });
            }
        }

        if (children.length && children.length > 0) {
            $sidebar['/'].push({
                title: chapter.title,
                collapsable: false,
                children: children
            });
        }
    }

    return $sidebar;
}
