<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul v-for="item of recommendList" :key="item.id">
      <li class="item border-bottom">
        <div class="item-img-wrap">
          <img class="item-img"
               :src="item.itemImg"
               alt="猜你喜欢">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [
        {
          id: 'recommend001',
          itemImg: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          itemTitle: '寻找北京的皇城范儿',
          itemDesc: '数百年的宫廷庙宇，至今依旧威严霸气'
        }, {
          id: 'recommend002',
          itemImg: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          itemTitle: '北京动物园',
          itemDesc: '一起去看国宝大熊猫'
        }, {
          id: 'recommend003',
          itemImg: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          itemTitle: '北京动物园',
          itemDesc: '一起去看国宝大熊猫'
        }, {
          id: 'recommend004',
          itemImg: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          itemTitle: '北京动物园',
          itemDesc: '一起去看国宝大熊猫'
        }
      ]
    }
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
    padding-bottom 33.9%
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
