<template>
  <RouterLink v-if="isInternal" :to="link" class="link">
    <img v-if="item.icon" :src="item.icon" alt="" class="link-icon">
    <div class="link-content">
      <h3 class="link-title">{{ item.title }}</h3>
      <div v-if="item.description" class="link-description">{{ item.description }}</div>
    </div>
    <span class="link-route">&#8250;</span>
  </RouterLink>

  <a v-else :href="link" class="link">
    <img v-if="item.icon" :src="item.icon" alt="" class="link-icon">
    <div class="link-content">
      <h3 class="link-title">{{ item.title }}</h3>
      <div v-if="item.description" class="link-description">{{ item.description }}</div>
    </div>
    <span class="link-route">&#8250;</span>
  </a>
</template>

<script>
import { isExternal, ensureExt } from '@parent-theme/util'

export default {
  name: 'HomeLink',

  props: {
    item: { type: Object, required: true }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    }
  }
}
</script>

<style lang="stylus">
.link
  display flex
  align-items center
  padding 16px 22px
  min-height 76px
  color inherit
  background-color #FFFFFF
  border-radius 8px
  transition 0.3s
  box-shadow 0 2px 16px rgba(141, 157, 166, 0.2)
  @media (max-width 520px)
    padding 14px 18px
    min-height 90px
  &:hover
    box-shadow 0 2px 32px rgba(141, 157, 166, 0.298039215686275)
  .link-icon
    display block
    margin-right 16px
    width 40px
    @media (max-width 520px)
      width 36px
      @media (max-width 460px)
        width 32px
  .link-content
    .link-title
      margin 0 0 2px
      font-size 1.2rem
      font-weight 500
      line-height 1.18
      @media (max-width 600px)
        font-size 1.1rem
    .link-description
      font-size 1rem
      font-weight normal
      line-height 1.3
      @media (max-width 600px)
        font-size 1rem
        @media (max-width 460px)
          font-size 0.9rem
  .link-route
    display flex
    justify-content center
    align-items center
    margin-left auto
    padding-left 16px
    font-size 2rem
    line-height 1
    color $accentColor
    transform translateY(-3px)
    @media (max-width 460px)
      font-size 1.6rem
</style>