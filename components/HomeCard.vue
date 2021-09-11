<template>
  <div class="card grid-item">
    <img v-if="item.icon" :src="item.icon" alt="" class="card-icon">

    <div class="card-content">
      <h3 class="card-title">{{ item.title }}</h3>
      <p v-if="item.description" class="card-description" v-html="item.description"></p>
    </div>

    <div v-if="item.access" class="card-access">
      <div v-if="item.access.login" class="access-item">
        <LoginSVG v-bind:class="'access-icon'"/>
        <span class="access-name">Логин:</span>
        <span v-clipboard="() => item.access.login" title="Нажмите, чтобы скопировать" class="access-value">{{ item.access.login }}</span>
      </div>
      <div v-if="item.access.password" class="access-item">
        <PasswordSVG v-bind:class="'access-icon'"/>
        <span class="access-name">Пароль:</span>
        <span v-clipboard="() => item.access.password" title="Нажмите, чтобы скопировать" class="access-value">{{ item.access.password }}</span>
      </div>
    </div>

    <div v-if="item.app" class="card-app">
      <a v-if="item.app.android" :href="item.app.android" target="_blank" class="app-item">
        <img :src="require('../assets/platform/store-android.svg')" alt="Google Play" class="app-image">
      </a>
      <a v-if="item.app.ios" :href="item.app.ios" target="_blank" class="app-item">
        <img :src="require('../assets/platform/store-ios.svg')" alt="App Store" class="app-image">
      </a>
    </div>
    <a v-else-if="item.link" :href="item.link" target="_blank" class="card-route">Перейти к демоверсии</a>
  </div>
</template>

<script>
import LoginSVG from '@theme/components/svg/LoginSVG.vue'
import PasswordSVG from '@theme/components/svg/PasswordSVG.vue'

export default {
  name: 'HomeCard',

  props: {
    item: { type: Object, required: true }
  },

  components: {
    LoginSVG,
    PasswordSVG,
  },
}
</script>

<style lang="stylus">
.card
  display flex
  flex-direction column
  padding 26px 22px
  min-height 89.08px
  color inherit
  background-color #FFFFFF
  border-radius 8px
  transition 0.3s
  box-shadow 0 2px 16px rgba(141, 157, 166, 0.2)
  @media (max-width 520px)
    padding 14px 18px
    min-height unset
  &:hover
    box-shadow 0 2px 32px rgba(141, 157, 166, 0.298039215686275)
  .card-icon
    display block
    margin-right 16px
    width 42px
    @media (max-width 520px)
      width 38px
  .card-content
    flex-grow 1
    margin-bottom auto
    .card-title
      margin 14px 0 0
      font-size 1.4rem
      font-weight 500
      line-height 1.2
    .card-description
      margin 14px 0 0
      font-size 1rem
      font-weight normal
      line-height 1.3
      @media (max-width 600px)
        font-size 0.9rem
  .card-access
    margin-top 14px
    display flex
    flex-direction column
    width 100%
    @media (max-width 600px)
      font-size 0.9rem
    .access-item
      display flex
      align-items center
      margin-top 1px
      margin-bottom 1px
      .access-icon
        width 24px
        margin-right 4px
      .access-name
        width 70px
      .access-value
        margin-left 4px
        transition 0.3s
        &:hover
          color $accentColor
  .card-app
    display flex
    justify-content center
    align-items center
    margin-top 26px
    @media (max-width: $MQMobileNarrow)
      flex-direction column
    .app-item
      display flex
      justify-content center
      width 176px
      border-radius 10px
      box-shadow 0 0 16px 0 rgba(50, 50, 50, 0.30)
      opacity 0.8
      transition 0.4s
      &:hover
        box-shadow 0 0 20px 0 rgba(50, 50, 50, 0.30)
        opacity 1
      &:not(:last-child)
        margin-right 14px
        @media (max-width: $MQMobileNarrow)
          margin-right 0
          margin-bottom 14px
      @media (max-width: $MQMobileNarrow)
        width 100%
      @media (max-width: $MQMobile)
        flex-grow 1
    .app-image
      display block
      height 56px
      object-fit contain
      object-position center

  .card-route
    margin-top 30px
    width auto
    font-size 1rem
    font-weight normal
</style>
