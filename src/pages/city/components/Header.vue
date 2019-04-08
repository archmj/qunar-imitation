<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgCol

    .header-back
      width: .64rem
      position: absolute
      left: 0
      top: 0
      text-align: center
      font-size: .4rem
      color: #fff

</style>
