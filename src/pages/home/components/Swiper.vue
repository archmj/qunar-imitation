<template>
  <div class="swipe-wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="img of swiperList" :key="img.id"><img class="swipe-img"
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
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cd159d07551d6506de88e0e2b04047ce.jpg_750x200_8a1f27c0.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg_750x200_57aa8efa.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/ec/278a34afb59a0d02.jpg_750x200_3292a705.jpg'
        }
      ]
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
    padding-bottom: 26.66%
    background: #ccc
    .swipe-img
      width: 100%

</style>
