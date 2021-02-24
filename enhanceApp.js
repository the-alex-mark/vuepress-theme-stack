export default ({
	Vue,
	options,
	router,
	siteData
}) => {

	// Настройка заголовка страницы
	Vue.mixin({
		computed: {
			$title () {
				if (this.$themeConfig.seo) {
					const page = this.$page;

					const siteTitle = this.$themeConfig.seoTitle || this.$siteTitle;
					const selfTitle = (page.frontmatter.home)
						? page.frontmatter.seo || this.$site.description
						: page.frontmatter.seo || page.frontmatter.title || page.title

					return (siteTitle)
						? (selfTitle) ? [ selfTitle, siteTitle ].join(' – ') : siteTitle
						: selfTitle || 'VuePress'
				}
				else { return this.$siteTitle; }
			}
		}
	});
}