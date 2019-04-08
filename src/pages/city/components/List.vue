<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom"> 当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom"> 热门城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom"> A</div>
        <div class="item-list">
          <div class="item border-bottom">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="title border-bottom"> A</div>
        <div class="item-list">
          <div class="item border-bottom">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="title border-bottom"> A</div>
        <div class="item-list">
          <div class="item border-bottom">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="title border-bottom"> A</div>
        <div class="item-list">
          <div class="item border-bottom">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="title border-bottom"> A</div>
        <div class="item-list">
          <div class="item border-bottom">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
        <div class="item-list border-bottom">
          <div class="item">阿加拉</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }

}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"

  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0

    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem

    .border-topbottom
      &:before
        border-color: #ccc

      &:after
        border-color: #ccc

    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem

      .button-wrap
        float: left
        width: 33.33%

        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem

    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left: .2rem

      .border-bottom
        &:before
          border-color: #ccc

</style>
