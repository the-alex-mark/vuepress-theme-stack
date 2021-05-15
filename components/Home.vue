<template>
  <main class="home">
    <HomeSection v-for="category in data" :id="category.slug" :title="category.title">
      <div :class="'section-grid grid-col-' + (category.columns || 1).toString()">
        <HomeLink v-for="item in category.items" v-if="item.link && item.title" :item="item" />
      </div>
    </HomeSection>

    <HomeSection id="markdown">
      <Content class="theme-default-content custom" />
    </HomeSection>

    <Footer/>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import HomeSection from '@theme/components/HomeSection'
import HomeLink from '@theme/components/HomeLink'
import Footer from '@theme/components/Footer'

export default {
  name: 'Home',

  components: {
    NavLink,
    HomeSection,
    HomeLink,
    Footer
  },

  computed: {
    data () {
      return this.$themeLocaleConfig.home || this.$site.themeConfig.home || {}
    }
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
    .link
      width calc(33.3333333% - 20px)
      @media (max-width 1080px)
        width calc(50% - 20px)
      @media (max-width 880px)
        width 100%
  &.grid-col-2
    .link
      width calc(50% - 20px)
      @media (max-width 880px)
        width 100%
  .link
    margin-right 20px
    margin-bottom 20px
    width 100%

@media (max-width 600px)
  .section-grid
    margin-right -14px
    margin-bottom -14px
    &:not(:first-child)
      margin-top 14px
    .link
      margin-right 14px
      margin-bottom 14px
</style>
