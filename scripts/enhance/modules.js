import Clipboard from "v-clipboard";
import Tooltip from "vue-directive-tooltip";
import VueToast from "vue-toast-notification";
import VueSocialSharing from 'vue-social-sharing'

export default ({ Vue, options, router, siteData }) => {

    // Модуль: Копировать в буфер обмена
    Vue.use(Clipboard);

    // Модуль: Подсказки при наведении
    Vue.use(Tooltip);

    // Модуль: Уведомления
    Vue.use(VueToast);

    // Модуль: Поделиться в социальных сетях
    Vue.use(VueSocialSharing);
}
