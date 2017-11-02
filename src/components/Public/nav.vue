<template>
<nav class="nav">
  <div class="nav-wrap">
    <div class="nav-item" v-for="(nav,index) in navs" key="index">
      <router-link class="nav-link" :to="{ name: nav.slug, params: { id: nav.slug }}">
        <i :class="nav.description"></i>
        <span class="nav-text">{{ nav.title }}</span>
      </router-link>
    </div>
  </div>
</nav>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      navs: '',
    }
  },
  created() {
    this.$http({
        method: 'get',
        url: '/core/get_category_index/',
      }).then((res) => {
        this.navs = res.data.categories.slice(0, 5)
      })
      .catch(function(error) {
        console.error(error);
      })
  }
}
</script>

<style lang="stylus" scoped>

    .nav
      position fixed
      top 0
      left -11.7em
      width 11.7em
      height 100%
      background-color #5d5d5d
      z-index 9999
      .nav-wrap
        width 100%
        height auto
        // background-color rgba(183, 191, 197, 0.6)
        // background-color #5d5d5d
        position absolute
        top 0
        left 0
        .nav-item
          line-height 3.3em
          .nav-link
            font-size 1em
            color #fff
            display block
            padding 0 0 0 1.3em
            transition color .15s linear
            &:hover
              color #fff
            &.active
              background-color rgba(183, 191, 197, 0.6)
              color #fff
            .icon
              font-size 1.4em
              vertical-align middle
            .nav-text
              font-size 1.4em
              margin-left 0.4em
              vertical-align middle
              text-transform uppercase

</style>
