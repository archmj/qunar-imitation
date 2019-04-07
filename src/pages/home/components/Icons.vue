<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="icon of list" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl"
                 alt="景点门票"
                 style="opacity: 1;">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages: function () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  @import "~@/assets/styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom 50%

  .icons
    margin-top: .1rem

    .icon
      position: relative
      overflow: hidden
      float: left
      height: 0
      width: 25%
      padding-bottom: 25%

      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem

        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto

      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        text-align: center
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        ellipsis()
</style>
