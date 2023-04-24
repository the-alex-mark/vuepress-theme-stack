<template>
  <router-link :to="item.link" class="link">

    <!-- Логотип -->
    <img v-if="item.icon" :src="item.icon" alt="" class="link-icon">

    <!-- Описание -->
    <div class="link-content">
      <h3 class="link-title text-truncate">{{ item.title }}</h3>
      <div v-if="item.description" class="link-description text-truncate">{{ item.description }}</div>
    </div>

    <!-- Ссылка -->
    <span class="link-route">&#8250;</span>
  </router-link>
</template>

<script>
export default {
  name: 'HomeLink',

  props: {
    item: { type: Object, required: true }
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
  overflow hidden
  @media (max-width 520px)
    padding 14px 18px
    min-height 90px
  .link-icon
    display block
    margin-right 16px
    width 40px
    @media (max-width 520px)
      width 36px
      @media (max-width 460px)
        width 32px
  .link-content
    max-width calc(100% - 80px)
    .link-title
      margin 0 0 2px
      margin-right 16px
      font-size 1.2rem
      font-weight 500
      line-height 1.18
      @media (max-width 600px)
        font-size 1.1rem
    .link-description
      margin-right 16px
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
    //padding-left 16px
    font-size 2rem
    line-height 1
    color $accentColor
    transform translateY(-3px)
    @media (max-width 460px)
      font-size 1.6rem
</style>
