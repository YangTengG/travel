<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ currentCity }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city']),
      currentCity: function() {
        return this.city;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl' 
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      float: left
      width: .64rem
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .1rem
      margin-left: .2rem
      padding-left: .2rem
      background-color: #fff
      border-radius: .12rem
      color: #ccc
    .header-right
      float: right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>