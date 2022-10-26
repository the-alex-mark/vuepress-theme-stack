<template>
  <home-section id="jumbotron">
    <h1 v-html="this.default.title" class="jumbotron-title"></h1>
    <p v-html="this.default.description" class="jumbotron-description"></p>
    <ButtonLink v-if="this.default.link && this.default.link.url" :title="this.default.link.title" :to="this.default.link.url" class="action-button jumbotron-button" />
  </home-section>
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
  position relative
  display flex
  align-items center
  padding 50px 0
  min-height 60vh
  overflow hidden
  .section.section-jumbotron
    position relative
    padding-bottom 0
    text-shadow 0 0 28px #ffffff
    &:before
      display none
    &:after
      position absolute
      content ''
      right 0
      bottom 50%
      width 700px
      height 440px
      transform translateY(50%)
      background-image url('../assets/Lesson-bro.svg')
      background-repeat no-repeat
      background-position center
      background-size 100%
      background-color unset !important
      transition 0.8s
      @media (max-width: 1300px)
        background-size 90%
      @media (max-width: $MQMobile)
        right 50%
        background-size 80%
        transform translate(50%, 50%)
        opacity 0.9
      @media (max-width: 560px)
        opacity 0
  .jumbotron-title
    position relative
    margin-top 0
    margin-bottom 0.8rem
    font-size 3.6rem
    text-transform uppercase
    line-height 1
    z-index 1
  .jumbotron-description
    position relative
    margin-top 0
    margin-bottom 0
    font-size 1.4rem
    line-height 1.3
    z-index 1
  .jumbotron-button
    position relative
    margin-top 2.8rem
    text-transform uppercase
    text-shadow: none;
    z-index 1
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

@media (max-width: 466px)
  .wrapper.wrapper-jumbotron
    .section.section-jumbotron
      text-align center
    .jumbotron-title
      font-size 2.2rem

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
