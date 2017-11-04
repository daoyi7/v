<template>
<nav class="nav" ref="nav">
  <div class="me">
    <div class="avatar"></div>
  </div>
  <div class="motto">
    <h3>" I Can do all things "</h3>
  </div>
  <div class="nav_wrap">
    <div class="nav_item" v-for="(nav,index) in navs" key="index">
      <router-link class="nav_link" :to="{ name: nav.slug, params: { id: nav.slug }}">
        <i :class="nav.description"></i>
        <span class="nav_text">{{ nav.title }}</span>
      </router-link>
    </div>
  </div>
  <div class="link">
    <div class="rico twitter">
      <a href="http://47.94.89.18/feed/" target="_blank" class="icon iconfont icon-rss"></a>
    </div>
    <div class="rico weibo">
      <a href="http://weibo.com/daoyi369 " target="_blank" class="icon iconfont icon-weibo"></a>
    </div>
    <div class="rico twitter">
      <a href="https://twitter.com/WellCoding" target="_blank" class="icon iconfont icon-twitter"></a>
    </div>
    <div class="rico github">
      <a href="https://github.com/daoyi7" target="_blank" class="icon iconfont icon-github"></a>
    </div>
  </div>
</nav>
</template>

<script type="text/ecmascript-6">
import store from '@/store/store'

export default {
  store,
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
  },
  computed: {
    isNav() {
      return this.$store.state.nav
    }
  },
  watch: {
    isNav: function() {
      this.toggle()
    }
  },
  methods: {
    toggle() {
      if (this.$store.state.nav) {
        this.$refs.nav.style.left = '-19em'
      }else {
        this.$refs.nav.style.left = '0em'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/mixin"

    .nav
      position fixed
      top 0
      // left 0
      left -19em
      z-index 10
      width 19em
      height 100%
      background-color #5d5d5d
      transition left .12s linear
      .me
        width 100%
        height 12em
        text-align center
        bg-image('background.jpg')
        background-size 50em
        background-repeat no-repeat
        background-position -15em -12em
        .avatar
          width 7em
          height 7em
          border 2px solid #fff
          border-radius 50%
          overflow hidden
          margin 3.5em 0 .8em
          display inline-block
          bg-image('avatar.jpg')
          background-size 11em
          background-repeat no-repeat
          background-position -1.7em 0
      .motto
        width 100%
        height 3em
        text-align center
        line-height 3em
        color #fff
        font-weight 100
        // border-1px(rgba(238, 238, 238, 0.38))
        border-1px(#565656)
        margin-bottom 1em
      .nav_wrap
        width 100%
        height auto
        padding 0 0 1em
        // border-1px(rgba(238, 238, 238, 0.38))
        border-1px(#565656)
        .nav_item
          line-height 3.3em
          .nav_link
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
            .nav_text
              font-size 1.4em
              margin-left 0.4em
              vertical-align middle
              text-transform uppercase
      .link
        display flex
        width 100%
        height 2em
        line-height 2em
        margin-top 1.5em
        .rico
          flex 1
          text-align center
          a.icon
            padding .13em .18em
            border-radius .2em
            background-color #fff
            color #00030d
            font-size 1.5em

</style>
