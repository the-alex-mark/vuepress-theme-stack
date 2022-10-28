import Clipboard from "v-clipboard";
import Tooltip from "vue-directive-tooltip";
import VueToast from "vue-toast-notification";

export default ({ Vue, options, router, siteData }) => {

    // Модуль: Буфер обмена
    Vue.use(Clipboard);

    // Модуль: Подсказки
    Vue.use(Tooltip);

    // Модуль: Уведомления
    Vue.use(VueToast);
}
