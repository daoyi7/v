<template>
<nav class="nav" ref="nav">
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
        this.$refs.nav.style.left = '0em'
      }else {
        this.$refs.nav.style.left = '-15em'
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
      left -15em
      z-index 10
      width 15em
      height 100%
      background-color #5d5d5d
      transition left .15s linear
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
      .link
        display flex
        width 100%
        height 2em
        line-height 2em
        margin-top 1em
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
