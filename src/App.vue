<template>
<div id="app">
  <v-nav class="nav"></v-nav>
  <main class="main" ref="main">
    <v-header @go="go" @back='back'></v-header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <v-footer></v-footer>
  </main>
  <!-- <backtop></backtop> -->
</div>
</template>

<script type="text/ecmascript-6">
import header from '@/components/Public/header'
import nav from '@/components/Public/nav'
import footer from '@/components/Public/footer'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-footer': footer
  },
  methods: {
    go() {
      this.$refs.main.style.left = '15em'
    },
    back() {
      this.$refs.main.style.left = '0em'
    }
  }
}
</script>

<style lang="stylus" scoped>

    #app
      .main
        position relative
        top 0
        left 0
        width 100%
        height 100%
        margin 0 auto
        overflow hidden
        transition left .15s linear
        &:after
          display block
          clear both
          height 0
          content  ""
          visibility  hidden
          overflow hidden
        .fade-enter-active, .fade-leave-active
          transition all .5s
        .fade-enter, .fade-leave-to
          opacity 0
          width 66.4em
</style>
