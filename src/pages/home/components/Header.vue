<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe612;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- 使用stylus语法开发css-->
<!-- 移动端用rem为单位，1rem = html font-size = 50px 这个在reset.css倒数第三行中-->
<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background: $bgCol
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-aligin: center
        font-size: .4rem
        margin-left: .1rem
    .header-input
      flex: 1
      margin-top: .12rem
      line-height: .64rem
      height: .64rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.024rem
</style>
