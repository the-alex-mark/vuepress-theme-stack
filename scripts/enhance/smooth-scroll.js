export default ({ Vue, options, router, siteData }) => {

    // Реализация плавной прокрутки до элемента
    router.options.scrollBehavior = (to, from, savedPosition) => {
        if (savedPosition) {
            return window.scrollTo({
                top: savedPosition.y,
                behavior: 'smooth',
            });
        }
        else if (to.hash) {
            if (Vue.$vuepress.$get('disableScrollBehavior')) {
                return;
            }
            const targetAnchor = to.hash.slice(1);
            const targetElement = document.getElementById(targetAnchor) ||
                document.querySelector(`[name='${targetAnchor}']`);
            if (targetElement) {
                return window.scrollTo({
                    top: getElementPosition(targetElement).y,
                    behavior: 'smooth',
                });
            }
        }
        else {
            return window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };
}

/**
 * Возвращает координаты указанного элемента относительно страницы с учётом зуммирования.
 *
 * @param  {Element} element Элемент.
 * @return {{x: number, y: number}}
 */
function getElementPosition(element) {
    const docElem  = document.documentElement;
    const docZoom  = window.getComputedStyle(docElem).zoom || 1;
    const docRect  = docElem.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();

    return {
        x: (elemRect.left - docRect.left) * docZoom,
        y: (elemRect.top - docRect.top) * docZoom
    };
}
