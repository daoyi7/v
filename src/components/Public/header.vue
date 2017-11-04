<template>
<header class="header" v-click-outside="searchHide">
  <div class="header_wrap" ref="header">
    <div class="header_nav">
      <span class="menu" @click.stop="menu"><i class="icon iconfont" :class="[isDetail ? 'icon-back' : 'icon-menu']"></i></span>
      <transition name="fade">
        <span class="title" ref="title" @click.stop="gohome" v-if="titleShow">kawhi.me</span>
        <input ref="input" class="input" type="text" v-model="searchText" placeholder="Search your want..." v-if="!titleShow" @keyup.enter="search" v-focus>
      </transition>
      <span class="search" @click.stop="searchShow" v-if='this.isBack'><i class="icon iconfont icon-search"></i></span>
    </div>
  </div>
</header>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import store from '@/store/store'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。

  inserted: function(el) {
    // 聚焦元素
    el.focus()
  },
  //也可以用update,update就是当页面有操作的时候就触发，比如点击按钮，输入框输入都算。
  //有一个要注意的就是，就是你页面有几个input,比如一个input绑定了v-focus,一个没有绑定。你在没绑定v-focus的input输入时，绑定了v-focus的input就是自动获取焦点，这是个bug.
  //update: function (el) {
  //el.focus()
  //}
});

export default {
  store,
  data() {
    return {
      searchText: '',
      hots: [],
      titleShow: true,
      isBack: true
    }
  },
  methods: {
    menu() {
      if (this.isBack) {
        if (this.$store.state.nav) {
          this.$refs.header.style.left = '19em'
          this.$emit('go')
        } else {
          this.$refs.header.style.left = '0em'
          this.$emit('back')
        }
        this.$store.commit('toggle')
      } else {
        this.$router.go(-1)
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
    searchHide() {
      this.titleShow = true
    },
    search() {
      if (this.searchText !== '') {
        this.$router.push({
          path: '/search/' + this.searchText
        })
      }
    }
  },
  computed: {
    isDetail() {
      if (this.$route.name == 'detail') {
        this.isBack = false
        return true
      } else {
        this.isBack = true
        return false
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
            i
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
