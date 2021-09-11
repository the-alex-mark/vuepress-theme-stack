import Clipboard from 'v-clipboard';

export default ({
	Vue,
	options,
	router,
	siteData
}) => {

	// Работа с буфером обмена
	Vue.use(Clipboard);

	// Настройка заголовка страницы
	Vue.mixin({
		computed: {
			$title () {
				if (this.$themeConfig.titleTag) {
					const page = this.$page;

					// Установка заголовка сайта
					let siteTitle = this.$themeConfig.titleTag.siteTitle || this.$siteTitle;

					// Проверка на существование страницы
					let selfTitle = this.$themeConfig.titleTag.self404 || 'Страница не найдена';
					if (page.path) {

						// Установка заголовка страницы
						selfTitle = (page.frontmatter.home)
							? (this.$themeConfig.titleTag.selfHome === false || this.$themeConfig.titleTag.selfHome === '')
								? ''
								: this.$themeConfig.titleTag.selfHome || page.frontmatter.selfTitle || page.frontmatter.title || this.$site.description
							: page.frontmatter.selfTitle || page.frontmatter.title || page.title
					}

					return (siteTitle)
						? (selfTitle) ? [ selfTitle, siteTitle ].join(' – ') : siteTitle
						: selfTitle || 'VuePress'
				}
				else { return this.$siteTitle; }
			}
		}
	});
}
