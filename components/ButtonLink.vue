<template>
  <router-link v-if="isInternal" v-html="title" :to="to" class="button" />
  <a v-else v-html="title" :href="to" class="button" target="_blank"></a>
</template>

<script>
import { isExternal, ensureExt } from '@parent-theme/util'

export default {
  name: 'ButtonLink',

  props: {
    title: { type: String, required: true },
    to: { type: String, required: true }
  },

  computed: {
    link () {
      return ensureExt(this.to)
    },

    isBlankTarget () {
      return this.target === '_blank'
    },

    isInternal () {
      return !isExternal(this.to) && !this.isBlankTarget
    }
  }
}
</script>

<style lang="stylus">
.button
  display inline-block
  padding 10px 34px
  font-family inherit
  font-size 1rem
  font-weight normal
  color #FFFFFF
  background-color $accentColor
  border none
  border-radius 4px
  &.action-button
    padding 14px 48px
    font-size 1.1rem
    font-weight bold
  @media (max-width: $MQMobileNarrow)
    font-size 0.9rem
  &.secondary-button
    background-color #2196F3
</style>
