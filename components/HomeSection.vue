<template>
  <div v-bind:class="'wrapper wrapper-' + id">
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
  }
}
</script>

<style lang="stylus">
.wrapper
  background-color #ffffff
  overflow-x hidden
  z-index 100
  &:nth-child(2n)
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
    background-color unset
    .container
      .section
        &.section-markdown
          padding-bottom 0
          &:before
            content none
</style>