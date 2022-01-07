<template>
  <div v-bind:class="'wrapper wrapper-' + id + ((trapeze) ? ' wrapper-trapeze' : '')">
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
    id:         { type: String,  required: false },
    title:      { type: String,  required: false },
    background: { type: String,  required: false }
  },

  computed: {
    data () {
      return this.$config.home || {}
    },

    trapeze () {
      return this.data.trapeze || false
    },
  }
}
</script>

<style lang="stylus">
.wrapper
  background-color #ffffff
  overflow-x hidden
  z-index 100
  &:nth-child(even)
    background-color rgb(221, 239, 222)
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
    background-color #F3F5F7
    .section
      &.section-markdown
        padding-bottom 30px
        &:before
          content none
        & > div
          h1
            &:before
              content ''
              display block
              height 100px
              margin-top -50px
            margin-top 0
            margin-bottom 30px
            padding 0
            font-size 2rem
            font-weight 600
            text-align center
            text-transform uppercase
            border none
            & > a
              display none
            @media (max-width 600px)
              font-size 1.6rem

.wrapper:not(:last-child)
  &.wrapper-trapeze
    margin-bottom -50px
    padding-top 50px
    padding-bottom 50px
    &:nth-child(odd)
      clip-path polygon(0 0, 100% 50px, 100% 100%, 0 100%)
    &:nth-child(even)
      clip-path polygon(0 50px, 100% 0, 100% 100%, 0 100%)

.wrapper:last-child
  flex-grow 1
  &.wrapper-trapeze
    margin-bottom 0
    padding-top 50px
    &:nth-child(odd)
      clip-path polygon(0 0, 100% 50px, 100% 100%, 0 100%)
    &:nth-child(even)
      clip-path polygon(0 50px, 100% 0, 100% 100%, 0 100%)

@media (max-width: $MQMobile)
  .wrapper:not(:last-child)
    &.wrapper-trapeze
      margin-bottom -30px
      padding-top 30px
      padding-bottom 30px
      &:nth-child(odd)
        clip-path polygon(0 0, 100% 30px, 100% 100%, 0 100%)
      &:nth-child(even)
        clip-path polygon(0 30px, 100% 0, 100% 100%, 0 100%)
</style>
