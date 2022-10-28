const utils = require('./utils')

export default ({ Vue, options, router, siteData }) => {

    // Дополнение ссылок бокового раздела для главной страницы
    siteData.themeConfig.sidebar = utils.resolverSidebarRootItems(siteData.themeConfig);

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
