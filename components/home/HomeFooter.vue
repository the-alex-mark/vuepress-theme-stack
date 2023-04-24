<template>
    <footer v-if="copyright" id="footer" class="footer">
     <div class="container">
       <router-link v-if="isInternal" v-html="copyright.text" :to="copyright.link" class="copyright" />
       <a v-else v-html="copyright.text" :href="copyright.link" class="copyright" target="_blank"></a>

        <div
          v-if="social"
          class="social-list"
        >
          <a
            v-for="item in social"
            v-if="item.icon && item.link"
            :href="item.link"
            target="_blank"
            class="social-link"

            :data-balloon-text="item.text"
            data-balloon-position="up"
          >
            <img :src="$withBase(item.icon)" :alt="item.text" class="social-icon">
          </a>
        </div>
      </div>
    </footer>
</template>

<script>
import { isExternal } from '@parent-theme/util'

export default {
  name: 'HomeFooter',

  computed: {
    data () {
      return this.$page.frontmatter
    },

    copyright () {
      return {
        text: this.data.footer || this.$themeConfig.footer.text,
        link: this.$themeConfig.footer.link || this.$localePath
      }
    },

    social () {
      return this.$themeConfig.footer.social;
    },

    isInternal () {
      return !isExternal(this.copyright.link)
    }
  }
}

</script>

<style lang="stylus">
.footer
  margin-top auto
  min-height 52px
  background-color #0A1229
  background-image none
  .container
    display flex
    align-items center
    justify-content center
    @media (max-width 750px)
      flex-direction column
      max-width unset
      width 100%
  .copyright
    font-size 0.8rem
    color #9ca5af
    @media (max-width 750px)
      margin-top 20px
      margin-bottom 1.5rem

.social-list
  display flex
  align-items center
  margin-left auto
  @media (max-width 750px)
    width 100%
    border-top 1px solid #9ca5af
  .social-link
    display flex
    justify-content center
    align-items center
    width 88px
    height 52px
    border-left 1px solid #9ca5af
    transition 0.3s
    @media (max-width 750px)
      flex-grow 1
      &:first-child
        border-left 1px solid transparent
    &:last-child
      border-right 1px solid #9ca5af
      @media (max-width 750px)
        border-right 1px solid transparent
    &:hover
      background-color darken($accentColor, 8)
      border-left 1px solid darken($accentColor, 8)
    &:hover:last-child
      border-right 1px solid darken($accentColor, 8)
    &:hover + .social-link
      border-left 1px solid darken($accentColor, 8)
    .social-icon
      display block
      width 24px
</style>
