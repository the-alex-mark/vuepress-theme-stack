<template>
  <div v-if="copyright" class="wrapper wrapper-footer">
    <div class="container">
      <footer id="footer" class="footer">
        <a v-if="copyright.text" :href="copyright.link || $localePath" class="copyright">
          {{ copyright.text }}
        </a>

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
          >
            <img :src="$withBase(item.icon)" :alt="item.text" class="social-icon">
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    data () {
      return this.$page.frontmatter
    },

    copyright () {
      return {
        text: this.data.footer || this.$themeConfig.footer.text,
        link: this.$themeConfig.footer.link
      }
    },

    social () {
      return this.$themeConfig.footer.social;
    }
  }
}

</script>

<style lang="stylus">
.wrapper.wrapper-footer
  margin-top auto
  background-color #0A1229
  @media (max-width 750px)
    .container
      max-width unset
      width 100%
  .footer
    display flex
    align-items center
    justify-content center
    min-height 52px
    @media (max-width 750px)
      flex-direction column
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
    width 68px
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
      background-color #438a34
      border-left 1px solid #438a34
    &:hover:last-child
      border-right 1px solid #438a34
    &:hover + .social-link
      border-left 1px solid #438a34
    .social-icon
      display block
      width 32px
</style>