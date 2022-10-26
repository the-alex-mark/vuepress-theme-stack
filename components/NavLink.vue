<template>
  <router-link
    v-if="isInternal"
    class="nav-link"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    <span class="nav-text">{{ item.text }}</span>
    <span class="nav-description" v-if="item.description">
      {{ item.description }}
    </span>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    <span class="nav-text">{{ item.text }}</span>
    <span class="nav-description" v-if="item.description">
      {{ item.description }}
    </span>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@parent-theme/util'

export default {
  name: 'NavLink',

  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales)
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)

      return this.link === '/'
    },

    isNonHttpURI () {
      return isMailto(this.link) || isTel(this.link)
    },

    isBlankTarget () {
      return this.target === '_blank'
    },

    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    },

    target () {
      if (this.isNonHttpURI)
        return null

      if (this.item.target)
        return this.item.target

      return isExternal(this.link) ? '_blank' : ''
    },

    rel () {
      if (this.isNonHttpURI)
        return null

      if (this.item.rel === false)
        return null

      if (this.item.rel)
        return this.item.rel

      return this.isBlankTarget ? 'noopener noreferrer' : null
    }
  },

  methods: {
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>

<style lang="stylus">
.nav-dropdown
  .nav-description
    color grey

@media (max-width: $MQMobile)
  .nav-description
    margin-left 2px
    &:before
      content '('
      margin-right -2px
    &:after
      content ')'
      margin-left -2px

@media (min-width: $MQMobile)
  .nav-dropdown
    .nav-link
      display flex !important
      justify-content space-between
      align-content center
    .nav-text
      display inline-block
    .nav-description
      display inline-block
      margin-left 1.5rem
      font-size 0.7rem
      line-height 1.7rem
      text-transform uppercase
</style>
