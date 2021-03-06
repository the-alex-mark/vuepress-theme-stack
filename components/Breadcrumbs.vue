<template>
  <div class="bread-crumbs can-hide">
    <span v-for="(crumb, index) in bread" :key="crumb.path">

      <RouterLink
        :to="crumb.path"
        :class="'bread-crumb' + ((crumb.path === '') ? 'bread-crumb-nolink' : '')"
      >
        {{ crumb.title }}
      </RouterLink>

      <span v-if="index !== bread.length - 1" class="bread-crumb-separator">
        &#8250;
      </span>

    </span>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",

  computed: {
    bread() {
      const parts = this.$page.path.split("/");

      if (!parts[parts.length - 1].length)
        parts.pop();

      let link = "";
      const crumbs = parts.map((slug) => {
        link += slug;
        const page = this.$site.pages.find(
          (el) => el.path === link || el.path === link + "/"
        );

        link += "/";
        if (page) {
          return {
            path: page.path,
            title: (page.frontmatter.home)
              ? page.frontmatter.breadcrumb || page.frontmatter.title || 'Главная'
              : page.frontmatter.breadcrumb || page.title
          };
        } else {
          return {
            path: '',
            title: this.titleCase(slug),
          };
        }
      });

      return crumbs;
    }
  },

  methods: {
    titleCase: function (str) {
      return str
        .toLowerCase()
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' ');
    }
  }
};
</script>

<style lang="stylus">
.bread-crumbs
  max-width $contentWidth
  margin 0 auto -5.6rem
  padding 5.6rem 2.5rem 2rem
  @media (max-width: $MQMobile)
    &.can-hide
      display none
  .bread-crumb
    font-size 0.7em
    color #999999
    &:hover
      color $accentColor;
    &:last-child
      color #666666
  .bread-crumb-separator
    color #cccccc
  .bread-crumb-nolink:hover
    text-decoration none
    color #999999
    cursor default
</style>