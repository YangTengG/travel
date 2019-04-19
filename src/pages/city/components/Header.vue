<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont city-header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    font-size: .32rem
    color: #fff
    text-align: center
    background-color: $bgColor
    .city-header-back
      width: .64rem
      color: #fff
      font-size: .4rem
      text-align: center
      position: absolute
      top: 0
      left: 0
      bottom: 0
</style>
