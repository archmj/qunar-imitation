<template>
  <div class="swipe-wrap">
    <swiper :options="swiperOption" v-if="showSwipe">
      <!-- slides -->
      <swiper-slide v-for="img of list" :key="img.id"><img class="swipe-img"
                                                           :src="img.imgUrl"
                                                           alt="去哪儿门票" style="opacity: 1;"></swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 2000,
        loop: true
      }
    }
  },
  computed: {
    showSwipe () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swipe-wrap >>> .swiper-pagination-bullet
    background: #fff

  .swipe-wrap
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #ccc

    .swipe-img
      width: 100%

</style>
