# VuePress Theme "Stack"

Тема сервиса для документации [компании «Стек»](https://stack-it.ru).

<br>

## Использование

Устанавливаем тему с помощью команды:
```bash
npm install vuepress-theme-stack --save
```

<br>

## Конфигурация

### breadcrumbs

- type: `bool`
- default: `undefined`

Отображение хлебных крошек.  
Элементы хлебных крошек берутся из заголовка статьи или `frontmatter`.

### titleTag

- type: `bool|object`
- default: `undefined`

| Параметр      | Описание                                                           |
|:-------------:| ------------------------------------------------------------------ |
| `siteTitle`   | Заголовок сайта                                                    |
| `selfHome`    | Подзаголовок главной страницы                                      |
| `self404`     | Подзаголовок страницы со статусом `404`                            |

Тег заголовка сайта `<title>Document</title>`.  
Элементы заголовка берутся из заголовка статьи или `frontmatter`.

### search

- type: `object`
- default: `undefined`

| Параметр      | Описание                                                           |
|:-------------:| ------------------------------------------------------------------ |
| `full`        | Вид поиска (`true` - во всех разделах, `false` - только в текущем) |
| `placeholder` | Заполнитель поля поиска                                            |

Настройки полнотекстового поиска.

<br>

## Примеры

Настраиваем конфигурацию сервиса:
```js
const { getNavLinks, getHomeLinks, getSidebarLinks, getFooterLinks } = require('./utils')

module.exports = {
    title: 'HELP',
    description: 'Документация программного обеспечения компании «Стек»',

    // Расположение собранного проекта
    dest: './dist',

    // Настройки постоянных ссылок
    base: '/',
    permalink: '/:regular',

    // Дополнительные настройки страницы
    head: [
        [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
        [ 'link', { rel:  'icon',     href:    '/assets/img/favicon.png' } ]
    ],

    // Локализация
    locales: { '/': { lang: 'ru-RU' } },

    // Конфигурация темы
    theme: 'stack',
    themeConfig: {
        logo: '/assets/logo.svg',
        
        // Хлебные крошки
        breadcrumbs: true,

        // Заголовок страницы
        titleTag: {
            siteTitle: 'Компания "Стек"',
            selfHome: 'Главная',
            self404: 'Страница не найдена'
        },
        
        // Поиск
        search: {
            full: false,
            placeholder: 'Поиск ...'
        },

        // Стартовая страница
        home: {

            // Блок приветствия
            jumbotron: {
                enabled: true,
                title: '<span class="mobile-narrow-can-hide"><span class="text-accent">Стек</span>.</span>Справочник',
                description: 'Документация программного обеспечения компании «Стек»',
                link: { title: 'Начать', url: '#services' }
            },

            // Блок контента
            content: {
                enabled: true,
                position: 'bottom'
            },

            trapeze: true,
            items: getHomeLinks(),
        },

        nav: getNavLinks(),
        sidebar: getSidebarLinks(),
        footer: getFooterLinks()
    }
}
```

<br>

Настраиваем главную страницу:
```js
module.exports = { getHomeLinks }

/**
 * Возвращает структурированный список ссылок для главной страницы.
 *
 * @returns array
 */
function getHomeLinks() {
    return [
        {
            title: 'Сервисы',
            slug: 'services',
            columns: 2,
            items: [
                {
                    title: 'Личный кабинет ФЛ',
                    description: 'Руководства пользователя',
                    icon: '/assets/img/icons/icon-lk_fl.svg',
                    link: '/lk/fl/'
                },
                {
                    title: 'Личный кабинет ЮЛ',
                    description: 'Руководства пользователя',
                    icon: '/assets/img/icons/icon-lk_ul.svg',
                    link: '/lk/ul/'
                }
            ]
        },
        {
            title: 'Мобильные приложения',
            slug: 'applications',
            columns: 3,
            items: [
                {
                    title: 'Стек-ЖКХ',
                    description: 'Руководства пользователя',
                    icon: '/assets/img/icons/icon-app_lk.png',
                    link: '/mp/lk/'
                }
            ]
        }
    ];
}
```

<br>

Настраиваем подвал:
```js
module.exports = { getFooterLinks }

/**
 * Возвращает содержание подвала.
 *
 * @return Object
 */
function getFooterLinks() {
    return {
        text: '© 1993 − ' + new Date().getFullYear() + ' Группа компаний «Стек»',
        link: 'https://stack-it.ru',
        social: getSocialLinks().items
    };
}
```

<br>

## Дополнительная информация

- [Vue](https://vuejs.org)
- [VuePress](https://vuepress.vuejs.org)
