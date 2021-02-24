<template>
  <main class="page">
    <slot name="top" />

    <Breadcrumbs v-if="$themeConfig.breadcrumbs" />
    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import Breadcrumbs from "@theme/components/Breadcrumbs"
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { Breadcrumbs, PageEdit, PageNav },

  props: [
    'sidebarItems'
  ]
}
</script>

<style lang="stylus">
@require '~@parent-theme/styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style>
