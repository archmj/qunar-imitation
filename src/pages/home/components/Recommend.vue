<template>
  <div>
    <div class="title">热销推荐</div>
    <ul v-for="item of list" :key="item.id">
      <li class="item border-bottom">
        <img class="item-img"
             :src="item.imgUrl"
             alt="猜你喜欢">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
{
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
    margin-top: .2rem
    text-indent: .2rem

  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .15rem
        background: #ff9300
        padding: 0 .1rem
        -webkit-border-radius: .06rem
        -moz-border-radius: .06rem
        border-radius: .06rem
        color: #fff

</style>
