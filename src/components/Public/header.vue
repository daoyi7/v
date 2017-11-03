<template>
<header class="header">
  <div class="header-wrap" ref="header">
    <nav class="header-nav">
      <span class="menu" @click="menu"><i class="icon iconfont icon-menu"></i></span>
      <router-link class="header-link" to="/">kawhi.me</router-link>
    </nav>
  </div>
</header>
</template>

<script type="text/ecmascript-6">
import store from '@/store/store'

export default {
  store,
  methods: {
    menu: function() {
    this.$store.commit('toggle')
    if(this.$store.state.nav) {
      this.$refs.header.style.left = '15em'
      this.$emit('go')
    }else {
      this.$refs.header.style.left = '0em'
      this.$emit('back')
    }
    }
  }
}
</script>

<style lang="stylus" scoped>

    height = 5em

    .header
      width 100%
      height height
      .header-wrap
        position fixed
        top 0
        left 0
        z-index: 9
        width 100%
        height height
        line-height height
        // background-color rgba(183, 191, 197, 0.6)
        background-color #5d5d5d
        color #fff
        transition left .15s linear
        .header-nav
          position relative
          width 100%
          margin 0 auto
          height height
          text-align center
          line-height height
          .menu
            position absolute
            left .5em
            top 50%
            width 3em
            height 3em
            margin-top -1.5em
            line-height 3em
            text-align center
            display inline-block
            i.icon-menu
              font-size 2em
          .header-link
            display inline-block
            width auto
            height 100%
            color #fff
            font-size 3em

</style>
