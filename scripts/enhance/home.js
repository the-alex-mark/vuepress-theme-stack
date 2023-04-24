import Home from '../../components/home/Home';
import HomeJumbotron from '../../components/home/HomeJumbotron';
import HomeSection from '../../components/home/HomeSection';
import HomeLink from '../../components/home/HomeLink';
import HomeCard from '../../components/home/HomeCard';
import HomeFooter from '../../components/home/HomeFooter';

export default ({ Vue, options, router, siteData }) => {
    Vue.component('home', Home);
    Vue.component('home-jumbotron', HomeJumbotron);
    Vue.component('home-section', HomeSection);
    Vue.component('home-link', HomeLink);
    Vue.component('home-card', HomeCard);
    Vue.component('home-footer', HomeFooter);
}
