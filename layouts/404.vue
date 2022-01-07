<template>
  <div class="theme-container">
    <main class="error">
      <h1 class="error-title">404</h1>
      <p class="error-description">
        Данная страница не найдена, возможно допущена<br>ошибка при вводе URL
      </p>

      <ButtonLink title="Вернуться на главную" :to="$localePath" class="error-button" />
    </main>
  </div>
</template>

<script>
import ButtonLink from '@theme/components/ButtonLink.vue'

export default {
  components: {
    ButtonLink
  }
}
</script>

<style lang="stylus">
.error
  display flex
  flex-direction column
  justify-content center
  align-items center
  min-height 100vh
  font-family 'Ubuntu', sans-serif
  .error-title
    margin 0
    padding 0
    font-size 12rem
    font-weight 700
    text-align center
    line-height 1
    color $accentColor
    @media (max-width: $MQMobileNarrow)
      font-size 8rem
  .error-description
    margin-top 10px
    font-size 1.2rem
    text-align center
    line-height 1.5
    @media (max-width: $MQMobileNarrow)
      font-size 0.9rem
  .error-button
    margin-top 30px
    @media (max-width: $MQMobileNarrow)
      margin-top 20px
</style>