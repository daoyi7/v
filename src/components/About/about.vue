<template>
  <div class="detail">
    <div class="main" v-html="this.content">
      {{ this.content }}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'detail',
  data() {
    return {
      id: this.$route.params.id,
      data: [],
      title: '',
      content: '',
    }
  },
  created() {
    this.$http({
        method: 'get',
        url: '/core/get_category_posts/?category_id=5'
      }).then((res) => {
        let about = res.data.posts[0]
        console.log(res.data.posts[0])

        // const index = idArr.indexOf(parseInt(id))
        this.title = about.title
        this.content = about.content

        document.title = this.title + ' | kawhi.me'
      })
      .catch(function(error) {
        console.error(error);
      })
  }
}
</script>


<style lang="stylus" scoped>

  .detail
    overflow hidden
    width 100%
    background #fff
    .main
      width 95%
      height auto
      margin 0 auto
      overflow hidden
      font-size 1em
      line-height 2em

</style>
