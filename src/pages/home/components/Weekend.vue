<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul v-for="item of list" :key="item.id">
      <li class="item border-bottom">
        <div class="item-img-wrap">
          <img class="item-img"
               :src="item.imgUrl"
               alt="猜你喜欢">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item-img-wrap
    overflow: hidden
    height: 0
    padding-bottom 38%

    .item-img
      width: 100%

  .item-info
    padding: .1rem

    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()

</style>
