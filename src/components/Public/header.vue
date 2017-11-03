<template>
<header class="header">
  <div class="header_wrap" ref="header">
    <div class="header_nav">
      <span class="menu" @click.stop="menu"><i class="icon iconfont icon-menu"></i></span>
      <transition name="fade">
        <span class="title" ref="title" @click.stop="gohome" v-if="titleShow">kawhi.me</span>
        <input ref="input" class="input" type="text" v-model="searchText" placeholder="Search your want..." v-if="!titleShow" @keyup.enter="search">
      </transition>
      <span class="search" @click.stop="searchShow"><i class="icon iconfont icon-search"></i></span>
    </div>
  </div>
</header>
</template>

<script type="text/ecmascript-6">
import store from '@/store/store'

export default {
  store,
  data() {
    return {
      searchText: '',
      hots: [],
      titleShow: true
    }
  },
  methods: {
    menu() {
      this.$store.commit('toggle')
      if (this.$store.state.nav) {
        this.$refs.header.style.left = '15em'
        this.$emit('go')
      } else {
        this.$refs.header.style.left = '0em'
        this.$emit('back')
      }
    },
    gohome() {
      this.$router.push({
        path: '/'
      })
    },
    searchShow() {
      this.titleShow = false
    },
    search() {
      if (this.searchText !== '') {
        this.$router.push({
          path: '/search/' + this.searchText
        })
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
      .header_wrap
        position fixed
        top 0
        left 0
        z-index: 9
        width 100%
        height height
        line-height height
        background-color #5d5d5d
        color #fff
        transition left .15s linear
        .header_nav
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
          .fade-enter-active, .fade-leave-active
            transition all .5s
          .fade-enter, .fade-leave-to
            opacity 0
          .title
            display inline-block
            width auto
            height 100%
            color #fff
            font-size 3em
          .input
            position absolute
            left 50%
            top 50%
            width 17.6em
            height 2.2em
            line-height 2.2em
            margin -1.1em 0 0 -8.8em
            font-size 1.2em
            font-weight 200
            text-align center
            border none
            background rgb(255, 255, 255)
            color rgb(162, 168, 173)
            border-radius .2em
            &:active,&:focus
              outline none
          .search
            position absolute
            right .5em
            top 50%
            width 3em
            height 3em
            margin-top -1.5em
            line-height 3em
            text-align center
            display inline-block
            i.icon-search
              font-size 2em

</style>
