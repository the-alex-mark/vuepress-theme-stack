<template>
  <main class="home">
    <HomeJumbotron v-if="jumbotron.enabled" :data="jumbotron" />

    <HomeSection v-for="category in data" :id="category.slug" :title="category.title">
      <div :class="'section-grid grid-col-' + (category.columns || 1).toString()">
        <template v-for="item in category.items" v-if="!item.type || item.type === 'link'">
          <HomeLink v-if="item.link && item.title" :item="item" />
        </template>
        <template v-else>
          <HomeCard v-if="item.link || item.app && item.title" :item="item" />
        </template>
      </div>
    </HomeSection>

    <HomeSection id="markdown" v-if="isVisibleContent">
      <Content class="theme-default-content custom" />
    </HomeSection>

    <Footer />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import HomeJumbotron from '@theme/components/HomeJumbotron.vue'
import HomeSection from '@theme/components/HomeSection.vue'
import HomeLink from '@theme/components/HomeLink.vue'
import HomeCard from '@theme/components/HomeCard.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    NavLink,
    HomeJumbotron,
    HomeSection,
    HomeLink,
    HomeCard,
    Footer
  },

  computed: {
    jumbotron () {
      return this.$themeLocaleConfig.jumbotron || this.$site.themeConfig.jumbotron || {}
    },

    data () {
      return this.$themeLocaleConfig.home || this.$site.themeConfig.home || {}
    },

    isVisibleContent() {
      return (this.$page.content.trim() !== '');
    }
  },

  mounted() {
    console.log(this.$page);
  }
}
</script>

<style lang="stylus">
.home
  box-sizing border-box
  display flex
  flex-direction column
  padding $navbarHeight 0 0
  margin 0 auto
  min-height 100vh
  *, *:before, *:after
    box-sizing border-box

.section-grid
  display flex
  flex-wrap wrap
  margin-right -20px
  margin-bottom -20px
  &:not(:first-child)
    margin-top 20px
  &.grid-col-3
    .grid-item
      width calc(33.3333333% - 20px)
      @media (max-width 1080px)
        width calc(50% - 20px)
      @media (max-width 880px)
        width 100%
  &.grid-col-2
    .grid-item
      width calc(50% - 20px)
      @media (max-width 880px)
        width 100%
  .grid-item
    margin-right 20px
    margin-bottom 20px
    width 100%

@media (max-width 600px)
  .section-grid
    margin-right -14px
    margin-bottom -14px
    &:not(:first-child)
      margin-top 14px
    .grid-item
      margin-right 14px
      margin-bottom 14px
</style>
