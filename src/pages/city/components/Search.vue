<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名称或者拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgCol

    .search-input
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      width: 100%
      padding: 0 .1rem
      height: .62rem
      line-height: .62rem
      text-align: center
      -webkit-border-radius: .06rem
      -moz-border-radius: .06rem
      border-radius: .06rem
      color: #666

</style>
