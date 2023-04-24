import OutboundLink from '../../components/override/OutboundLink';

export default ({ Vue, options, router, siteData }) => {

    // Переопределение компонента иконки внешнего ресурса
    Vue.component('OutboundLink', OutboundLink);
}
