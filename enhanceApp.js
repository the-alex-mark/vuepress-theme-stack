import Clipboard from 'v-clipboard';
import OutboundLink from './components/override/OutboundLink';

export default ({ Vue, options, router, siteData }) => {

    // Дополнение меню бокового раздела для главной страницы
    siteData.themeConfig.sidebar = resolveSidebarItems(siteData.themeConfig);

    // Переопределение компонента иконки внешнего ресурса
    Vue.component('OutboundLink', OutboundLink);

	// Работа с буфером обмена
	Vue.use(Clipboard);

	// Настройка глобальной конфигурации
	Vue.mixin({
		computed: {

			/**
			 * Возвращает конфигурацию сайта.
			 *
			 * @returns {Object|{}}
			 */
			$config () {
				if (Object.keys(this.$themeLocaleConfig).length !== 0)
					return this.$themeLocaleConfig;

				if (Object.keys(this.$site.themeConfig).length !== 0)
					return this.$site.themeConfig;

				if (Object.keys(this.$themeConfig).length !== 0)
					return this.$themeConfig;

				return {};
			},

			/**
			 * Возвращает заголовок сайта.
			 *
			 * @returns {string}
			 */
			$title () {
				if (this.$config.titleTag) {
					const page = this.$page;

					// Установка заголовка сайта
					let siteTitle = this.$config.titleTag.siteTitle || this.$siteTitle;

					// Проверка на существование страницы
					let selfTitle = this.$config.titleTag.self404 || 'Страница не найдена';
					if (page.path) {

						// Установка заголовка страницы
						selfTitle = (page.frontmatter.home)
							? (this.$config.titleTag.selfHome === false || this.$config.titleTag.selfHome === '')
								? ''
								: this.$config.titleTag.selfHome || page.frontmatter.selfTitle || page.frontmatter.title || this.$site.description
							: page.frontmatter.selfTitle || page.frontmatter.title || page.title
					}

					return (siteTitle)
						? (selfTitle) ? [ selfTitle, siteTitle ].join(' – ') : siteTitle
						: selfTitle || 'VuePress'
				}
				else
                    return this.$siteTitle;
			}
        }
	});
}

function resolveSidebarItems($config) {
    let $sidebar = $config.sidebar;

    $sidebar['/'] = [];
    for (const chapter of $config.home.items) {
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
