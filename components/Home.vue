<template>
  <main class="home">
    <home-jumbotron v-if="jumbotron.enabled" :data="jumbotron" />

    <home-section id="markdown" v-if="content.enabled && content.position === 'top'">
      <Content class="theme-default-content custom" />
    </home-section>

    <home-section v-for="category in data.items" :id="category.slug" :title="category.title">
      <div :class="'grid grid-col-' + (category.columns || 1).toString()">
        <template v-for="item in category.items" v-if="!item.type || item.type === 'link'">
          <home-link v-if="item.title" :item="item" class="box-shadow grid-item" />
        </template>
        <template v-else>
          <home-card v-if="item.title" :item="item" class="box-shadow grid-item" />
        </template>
      </div>
    </home-section>

    <home-section id="markdown" v-if="content.enabled && content.position === 'bottom'">
      <Content class="theme-default-content custom" />
    </home-section>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import HomeJumbotron from '@theme/components/HomeJumbotron.vue'
import HomeSection from '@theme/components/HomeSection.vue'

export default {
  name: 'Home',

  components: {
    NavLink,
    HomeJumbotron,
    HomeSection
  },

  computed: {
    data () {
      return this.$config.home || {}
    },

    jumbotron () {
      return this.data.jumbotron || {};
    },

    content () {
      let data = this.data.content || {};

      return {
        enabled: (!data.enabled || data.enabled === true) && this.$page.content.trim() !== '',
        position: data.position || 'bottom'
      }
    }
  }
}
</script>

<style lang="stylus">
//.home
//  padding $navbarHeight 0 0

.home
  box-sizing border-box
  display flex
  flex-direction column
  margin 0 auto
  min-height 100vh
  *, *:before, *:after
    box-sizing border-box

.box-shadow
  box-shadow 0 2px 18px rgba(141, 157, 166, 0.3)
  &:hover
    box-shadow 0 2px 32px rgba(141, 157, 166, 0.398039215686275)
</style>
