<template>
  <HomeSection id="jumbotron">
    <h1 v-html="this.default.title" class="jumbotron-title"></h1>
    <p v-html="this.default.description" class="jumbotron-description"></p>
    <ButtonLink v-if="this.default.link && this.default.link.url" :title="this.default.link.title" :to="this.default.link.url" class="action-button jumbotron-button" />
  </HomeSection>
</template>

<script>
import HomeSection from '@theme/components/HomeSection'
import ButtonLink from '@theme/components/ButtonLink.vue'

export default {
  name: 'HomeJumbotron',

  props: {
    data: { type: Object, required: true }
  },

  components: {
    HomeSection,
    ButtonLink
  },

  computed: {
    default () {
      let data = this.data;
      return {
        enabled: data.enabled || false,
        title: data.title || 'Hello, world!',
        description: data.description || this.$site.description,
        link: data.link || false
      }
    }
  }
}
</script>

<style lang="stylus">
.wrapper.wrapper-jumbotron
  display flex
  align-items center
  padding 50px 0
  min-height 60vh
  background-color #ffffff !important
  .section.section-jumbotron
    padding-bottom 0
    &:before
      display none
  .jumbotron-title
    margin-top 0
    margin-bottom 0.8rem
    font-size 3.6rem
    text-transform uppercase
    line-height 1
  .jumbotron-description
    margin-top 0
    margin-bottom 0
    font-size 1.4rem
    line-height 1.3
  .jumbotron-button
    margin-top 2.8rem
    text-transform uppercase
    &:not(:last-child)
      margin-right: 0.8rem;

@media (max-width: $MQMobile)
  .wrapper.wrapper-jumbotron
    .jumbotron-title
      font-size 2.6rem
    .jumbotron-description
      font-size 1rem
    .jumbotron-button
      font-size 1rem
      padding 12px 38px

@media (max-width: $MQMobileNarrow)
  .wrapper.wrapper-jumbotron
    .jumbotron-title
      font-size 1.8rem
    .jumbotron-description
      font-size 0.9rem
    .jumbotron-button
      font-size 0.9rem
      padding 10px 34px

@media (max-width: 330px)
  .wrapper.wrapper-jumbotron
    .jumbotron-title
      font-size 1.6rem
</style>