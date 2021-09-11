<template>
  <div v-bind:class="'wrapper wrapper-' + id + ((diagonal) ? ' wrapper-diagonal' : '')">
    <div class="container">
      <section v-bind:id="id" v-bind:class="'section section-' + id">
        <h2 v-if="title" class="section-title">{{ title }}</h2>
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',

  props: {
    id:         { type: String, required: false },
    title:      { type: String, required: false },
    background: { type: String, required: false }
  },

  computed: {
    diagonal () {
      return this.$themeLocaleConfig.diagonal || this.$site.themeConfig.diagonal || false
    }
  }
}
</script>

<style lang="stylus">
.wrapper
  background-color #ffffff
  overflow-x hidden
  z-index 100
  &:nth-child(even)
    background-color rgb(221, 239, 222)
  .container
    max-width 1520px
    width calc(100% - 3rem)
    margin-left auto
    margin-right auto
    @media (max-width 1580px)
      max-width 1140px
    .section
      padding-bottom 50px
      &:before
        content ''
        display block
        height 100px
        margin-top -50px
      .section-title
        margin-top 0
        margin-bottom 30px
        padding 0
        font-size 2rem
        font-weight 600
        text-align center
        text-transform uppercase
        border none
        @media (max-width 600px)
          font-size 1.6rem

.wrapper
  &.wrapper-markdown
    background-color #F3F5F7
    .section
      &.section-markdown
        padding-bottom 30px
        &:before
          content none

.wrapper:not(:last-child)
  &.wrapper-diagonal
    margin-bottom -50px
    padding-top 50px
    padding-bottom 50px
    &:nth-child(odd)
      clip-path polygon(0 0, 100% 50px, 100% 100%, 0 100%)
    &:nth-child(even)
      clip-path polygon(0 50px, 100% 0, 100% 100%, 0 100%)

.wrapper:nth-last-child(2)
  &.wrapper-diagonal
    margin-bottom 0
    padding-bottom 0

@media (max-width: $MQMobile)
  .wrapper:not(:last-child)
    &.wrapper-diagonal
      margin-bottom -30px
      padding-top 30px
      padding-bottom 30px
      &:nth-child(odd)
        clip-path polygon(0 0, 100% 30px, 100% 100%, 0 100%)
      &:nth-child(even)
        clip-path polygon(0 30px, 100% 0, 100% 100%, 0 100%)
</style>