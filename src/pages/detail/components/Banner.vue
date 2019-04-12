<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p52/201211/08/e8401f365a5e6b8393835fbb.jpg_600x330_0093a43c.jpg" alt="茂名森林公园">

      <div class="banner-info">
        <div class="banner-title">茂名森林公园</div>
        <div class="banner-number"><span class="iconfont arrow-icon banner-icon">&#xe60a;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1505/90/90b849894982d934.water.jpg_200x200_6c7dbab0.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/9885ab6669abb12f081b9e8741dd30a9.jpg_200x200_5b673aa7.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom 55%

    .banner-img
      width: 100%

    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem

      .banner-number
        margin-top: .14rem
        height: .32rem
        padding: 0 .4rem
        line-height .32rem
        border-radius .2rem
        background: rgba(0, 0, 0, .8)
        font-size .24rem

        .banner-icon
          font-size: .24rem

</style>
