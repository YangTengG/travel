<template>
  <div class="header">
    <router-link
      tag="div"
      class="header-abs"
      v-show="isAbsHeader"
      to="/">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" 
      v-show="!isAbsHeader"
      :style="opacityStyle">
      <div class="name">{{ sightName }}</div>
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    props: {
      sightName: String
    },
    data: function() {
      return {
        isAbsHeader: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    mounted: function() {
      window.addEventListener('scroll', this.handleWindowScroll);
    },
    beforeDestroy: function() {
      window.removeEventListener('scroll', this.handleWindowScroll);
    },
    methods: {
      handleWindowScroll: function(e) {
        const top = document.documentElement.scrollTop;
        const headerHeight = 43;
        const bannerHeight = document.documentElement.clientWidth * 0.55 - headerHeight;

        if (top > 10) {
          this.isAbsHeader = false;
          let opacity = top / bannerHeight + 0.2;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = { opacity };
        } else {
          this.isAbsHeader = true;
        }

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header-abs
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: 50%
    background-color: rgba(0, 0, 0, .6)
    position: absolute
    top: .2rem
    left: .2rem
    z-index: 10
    .header-abs-back
      color: #fff
      font-size: .32rem
  .header-fixed
    height: $headerHeight
    line-height: $headerHeight
    background-color: $bgColor
    text-align: center
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 10
    .name
      color: #fff
      padding: 0 .64rem
      font-size: .32rem
      ellipsis()
    .header-fixed-back
      width: .64rem
      text-align: center
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
