<template>
<div class="contentWrap">
  <div class="item">
    <div class="module" v-for="(blog, index) in blogs" :key="blog.id" v-if="blog.categories[0].slug != 'notice'">
      <div class="thumb">
        <router-link :to="{ name: 'detail',params: { id: blog.id}}">
          <img :src="blog.thumbnail_images?blog.thumbnail_images.full.url:defaultImgUrl">
        </router-link>
      </div>
      <div class="main">
        <h4 class="title">
          <router-link :to="{ name: 'detail',params: { id: blog.id}}">
            {{ blog.title }}
          </router-link>
        </h4>
        <p class="info" v-if="blog.excerpt" v-html="blog.excerpt">{{ blog.excerpt }}</p>
        <div class="list">
          <p class="list-icon time">
            <i class="icon iconfont icon-updatetime"></i>
            <span>{{ blog.modified | moment }}</span>
          </p>
          <p class="list-icon view" v-if="blog.custom_fields.views">
            <i class="icon iconfont icon-view"></i>
            <span>{{ blog.custom_fields.views | views }}</span>
          </p>
          <!-- <p class="list-icon comments">
            <i class="icon iconfont icon-comments"></i>
            <span>{{ blog.comment_count }}</span>
          </p>
          <p class="list-icon like">
            <i class="icon iconfont icon-like"></i>
            <span>1</span>
          </p> -->
          <p class="list-icon tag">
            <i class="icon iconfont icon-tag"></i>
            <span>{{ blog.categories[0].slug }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'

export default {
  name: 'blog',
  props: {
    blogs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      defaultImgUrl: '../static/images/logo.png',
    }
  },
  filters: {
    moment: function(value) {
      return Vue.prototype.$moment(value).startOf('hour').fromNow()
    },
    views: function(value) {
      return value.toString()
    }
  }
}
</script>

<style lang="stylus" scoped>

  trans = .5s linear

  .contentWrap
    width 100%
    height auto
    overflow hidden
    margin-top .5em
    .item
      width 100%
      .module
        position relative
        width 100%
        background #fff
        padding .4em 0em
        margin-bottom .5em
        display flex
        transition background trans
        .thumb
          flex 0 0 13em
          width 13em
          height 8.4em
          margin-right 1em
          padding-left 0.5em
          a
            position relative
            width 100%
            height 100%
            display block
            overflow hidden
            img
              position absolute
              top -3em
              left -3.5em
              min-width 100%
              max-width calc(150% + 1.5em)
              width calc(150% + 1.5em)
              min-height 13em
              height auto
              transform translateX(0)
              transition transform trans
        .main
          flex 1
          padding-right 1em
          .title
            width 98%
            line-height 2em
            padding-bottom .5em
            font-weight 700
            transform translateX(0)
            transition transform trans
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            a
              position relative
              font-size 1.4em
              color #00030d
          .info
            height 4em
            max-height 4em
            font-size 1.2em
            line-height 1.8em
            color #1d1d1d
          .list
            display flex
            line-height 1.4em
            padding-top .2em
            font-size 1.2em
            .list-icon
              flex 1
              i
                vertical-align middle
                margin-right .2em
                font-size 1.2em
              span
                vertical-align middle
              &.time
                flex 0 0 8.5em
                width 8.5em
              &.like
                cursor pointer
              &.tag
                i
                  font-size .5em
                  font-weight 700

</style>
