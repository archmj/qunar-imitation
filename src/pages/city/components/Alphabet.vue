<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item"
        :ref="item"
        @click="handelLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      {{item}}
    </li>

  </ul>
</template>

<script>
export default {
  name: 'CityAphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handelLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数截流
        this.timer = setTimeout(() => {
          // 减去菜单栏的高度
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(index)
          }
        }, 5)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem

    .item
      line-height: .4rem
      text-align: center
      color: $bgCol

</style>
