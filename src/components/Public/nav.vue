<template>
<nav class="nav">
  <div class="me">
    <div class="avatar"></div>
    <div class="motto">
      <h3>" I Can do all things "</h3>
    </div>
  </div>
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
@import "../../common/mixin"

    .nav
      position fixed
      top 0
      // left -11.7em
      left 0
      width 15em
      height 100%
      background-color #5d5d5d
      z-index 9999
      .me
        width 100%
        height 12em
        text-align center
        bg-image('background.jpg')
        background-size 25em
        background-repeat no-repeat
        background-position -5em -2em
        .avatar
          width 8em
          height 8em
          border-radius 50%
          overflow hidden
          margin 1em 0 .8em
          display inline-block
          bg-image('avatar.jpg')
          background-size 11em
          background-repeat no-repeat
          background-position -1.2em 0
        .motto
          width 100%
          height 2em
          text-align center
          line-height 2em
          color #fff
          font-weight 100
      .nav-wrap
        width 100%
        height auto
        .nav-item
          line-height 3.3em
          .nav-link
            font-size 1em
            color #fff
            display block
            padding 0 0 0 1.3em
            transition color .15s linear
            &.active
              background-color #eeeeee
              color #00030d
              font-weight 700
            .icon
              font-size 1.4em
              vertical-align middle
            .nav-text
              font-size 1.4em
              margin-left 0.4em
              vertical-align middle
              text-transform uppercase

</style>
