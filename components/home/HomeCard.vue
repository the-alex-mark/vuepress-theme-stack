<template>
  <div class="card">

    <!-- Логотип -->
    <img v-if="item.icon" :src="item.icon" alt="" class="card-icon">

    <!-- Описание -->
    <div class="card-content">
      <h3 class="card-title">{{ item.title }}</h3>
      <p v-if="item.description" class="card-description" v-html="item.description"></p>
    </div>

    <!-- Учётная запись -->
    <div v-if="item.access" class="card-access">
      <div v-if="item.access.login" class="access-item">
        <LoginSVG v-bind:class="'access-icon'"/>
        <span class="access-name">Логин:</span>
        <span
          v-clipboard="() => item.access.login"
          v-clipboard:success="copyLoginSuccess"
          class="access-value"

          data-balloon-text="Нажмите, чтобы скопировать"
          data-balloon-position="left"
        >
          {{ item.access.login }}
        </span>
      </div>
      <div v-if="item.access.password" class="access-item">
        <PasswordSVG v-bind:class="'access-icon'"/>
        <span class="access-name">Пароль:</span>
        <span
          v-clipboard="() => item.access.password"
          v-clipboard:success="copyPasswordSuccess"
          class="access-value"

          data-balloon-text="Нажмите, чтобы скопировать"
          data-balloon-position="left"
        >
          {{ item.access.password }}
        </span>
      </div>
    </div>

    <!-- Приложения -->
    <div v-if="item.app" class="card-app">
      <a v-if="item.app.android" :href="item.app.android" target="_blank" class="app-item">
        <img :src="require('../../assets/platform/store-android.svg')" alt="Google Play" class="app-image">
      </a>
      <a v-if="item.app.ios" :href="item.app.ios" target="_blank" class="app-item">
        <img :src="require('../../assets/platform/store-ios.svg')" alt="App Store" class="app-image">
      </a>
    </div>

    <div v-else-if="item.links || item.link" class="card-links">
      <a
        href="https://stack-it.ru"
        target="_blank"
        class="card-route"

        data-balloon-text="Презентация"
        data-balloon-position="down"
      >
<!--        <img :src="require('../assets/common/docs_2.svg')" alt="Презентация" class="card-route-icon">-->
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/link.png" alt="Презентация" class="card-route-icon">-->
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/business.png" alt="Презентация" class="card-route-icon">-->
        <img src="https://img.icons8.com/small/1024/3eaf7c/training.png" alt="Презентация" class="card-route-icon">
      </a>

      <a
        href="https://stack-it.ru"
        target="_blank"
        class="card-route"

        data-balloon-text="Документация"
        data-balloon-position="down"
      >
<!--        <img :src="require('../assets/common/docs_2.svg')" alt="Документация" class="card-route-icon">-->
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/document.png" alt="Документация" class="card-route-icon">-->
        <img src="https://img.icons8.com/small/1024/3eaf7c/pricing-structure.png" alt="Документация" class="card-route-icon">
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/training.png" alt="Документация" class="card-route-icon">-->
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/literature.png" alt="Документация" class="card-route-icon">-->
      </a>

<!--      <a :href="item.links.demo || item.link" target="_blank" class="card-route" style="margin-left: auto">-->
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/trial-version.png" alt="Демонстрация" class="card-route-icon" style="margin-left: 8px;">-->
<!--        <span class="card-route-text">Демонстрация</span>-->
<!--      </a>-->

      <div class="nav-links" style="margin-left: auto">
        <div class="nav-item">
          <DropdownLink :item="data" />
        </div>
      </div>

<!--      <a href="https://stack-it.ru" target="_blank" class="card-route" v-tooltip.bottom="'Поделиться'" style="margin-left: 10px;">-->
<!--        <img src="https://img.icons8.com/small/1024/3eaf7c/share.png" alt="Документация" class="card-route-icon">-->
<!--      </a>-->

      <ShareNetwork
        network="vk"
        :url="this.$route.path"
        title="СТЕК.СПРАВОЧНИК"
        description="Инструкции по работе отдела интернет-технологий."
      >
        <span
          class="card-route"
          style="margin-left: 10px;"

          data-balloon-text="Поделиться"
          data-balloon-position="down"
        >
          <img src="https://img.icons8.com/small/1024/3eaf7c/share.png" alt="Документация" class="card-route-icon">
        </span>
      </ShareNetwork>


<!--      &lt;!&ndash; Ссылка на демонстрационный стенд &ndash;&gt;-->
<!--      <br>-->
<!--      <br>-->
<!--      <a v-if="item.links.demo || item.link" :href="item.link" target="_blank" class="card-route">Перейти к демо-стенду</a>-->

<!--      &lt;!&ndash; Ссылка на документацию &ndash;&gt;-->
<!--      <br>-->
<!--      <a v-if="item.links.help" :href="item.help" target="_blank" class="card-route">Перейти к документации</a>-->
    </div>

  </div>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import LoginSVG from '@theme/components/svg/LoginSVG.vue'
import PasswordSVG from '@theme/components/svg/PasswordSVG.vue'

export default {
  name: 'HomeCard',

  props: {
    item: { type: Object, required: true }
  },

  components: {
    DropdownLink,
    LoginSVG,
    PasswordSVG,
  },

  computed: {
    data () {
      return {
        text: 'Демонстрация',
        items: [
          {
            text: 'Презентационная версия',
            link: 'https://lk.prezent.stack-it.ru'
          },
          {
            text: 'Демонстрационная версия',
            link: 'https://lk.stack-it.ru'
          },
          {
            text: 'Тестовая версия: 2022.08',
            link: 'http://lkfiz.202208.dev.stack-it.ru/'
          },
          {
            text: 'Тестовая версия: 2021.09',
            link: 'http://lkfiz.202109.dev.stack-it.ru/'
          },
          {
            text: 'Тестовая версия: 2021.04',
            link: 'http://lkfiz.202104.dev.stack-it.ru/'
          },
          {
            text: 'Тестовая версия: 2020.09',
            link: 'http://lkfiz.202009.dev.stack-it.ru/'
          },
          {
            text: 'Тестовая версия: 2020.06',
            link: 'http://lkfiz.202006.dev.stack-it.ru/'
          }
        ]
      };
    }
  },

  methods: {
    copyLoginSuccess: function () {
      this.$toast.success("Логин успешно скопирован!", {
        position: "top-right",
        hideProgressBar: true,
        closeButton: false
      });
    },

    copyPasswordSuccess: function () {
      this.$toast.success("Пароль успешно скопирован!", {
        position: "top-right",
        hideProgressBar: true,
        closeButton: false
      });
    }
  }
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
  @media (max-width 520px)
    padding 14px 18px
    min-height 90px
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
        width 64px
      .access-value
        cursor pointer
        margin-left 4px
        transition 0.3s
        &:hover
          color $accentColor
  .card-app
    display flex
    justify-content center
    align-items center
    margin-top 46px
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

  .card-links
    display flex
    align-items center
    margin-top 30px

  .card-route
    display flex
    justify-content center
    align-items center
    min-width 40px
    height 40px
    margin-right 10px
    padding 3px
    width auto
    font-size 1rem
    font-weight normal
    border 1px solid $accentColor
    //border-radius 100px
    border-radius 0.4rem
    &:last-child
      margin-right 0
    .card-route-icon
      width 22px
    .card-route-text
      display inline-block !important
      margin-left 10px
      margin-right 10px
</style>
