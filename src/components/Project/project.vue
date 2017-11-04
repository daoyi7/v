<template>
<div class="project">
  <div class="item" v-for="(repo, index) in repos" key="index">
    <a :href="repo.html_url" target="_blank">
      <div class="thumb">
        <i class="icon iconfont" :class="[repo.language?'icon-' + repo.language:'icon-repositories']"></i>
      </div>
      <div class="content">
        <h3 class="title">{{ repo.name }}</h3>
        <p class="description">{{ repo.description }}</p>
        <div class="info">
          <span class="star"><i class="icon iconfont icon-star-full"></i>{{ repo.stargazers_count }}</span>
          <span class="fork"><i class="icon iconfont icon-fork"></i>{{ repo.forks_count }}</span>
        </div>
      </div>
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      repos: [],
      pageTile: this.$route.name.substr(0, 1).toUpperCase() + this.$route.name.substr(1)
    }
  },
  created() {
    this.$http({
        method: 'get',
        url: 'https://api.github.com/users/daoyi7/repos',
      }).then((res) => {
        this.repos = res.data
      })
      .catch(function(error) {
        console.error(error)
      })
  },
  mounted() {
    document.title = this.pageTile + ' | kawhi.me'
  }
}
</script>

<style lang="stylus" scoped>

    trans = .5s linear

    .project
      width 100%
      overflow hidden
      display flex
      flex-wrap wrap
      justify-content space-between
      .item
        width 49%
        a
          display block
          margin-bottom .8em
          background rgb(255, 255, 255)
          .thumb
            width 100%
            height 8em
            overflow hidden
            text-align center
            line-height 9.5em
            i
              font-size 8em
              color rgb(154, 154, 154)
              &.icon-Vue
                color #42b983
              &.icon-JavaScript
                color #f9e031
              &.icon-PHP
                color #5b66a4
              &.icon-HTML
                color #f16528
              &.icon-repositories
                font-size 6.8em
                color #24292e
          .content
            padding .4em 1em 1.2em 1em
            .title
              line-height 1.5em
              text-align center
              font-size 1.5em
              color #00030d
              font-weight 700
              white-space nowrap
              margin-bottom .4em
            .description
              width 100%
              margin-bottom 1em
              text-align left
              color #00030d
              line-height 2em
              text-align center
              font-size 1.2em
              height 2em
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .info
              display flex
              padding-top 1em
              border-top 1px solid #b7bfc5
              color #00030d
              span
                flex 1
                text-align center
                font-size 1.4em
                i
                  margin-right .5em

</style>
