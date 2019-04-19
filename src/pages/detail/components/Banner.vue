<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="banner">
      <div class="banner-info">
        <div class="sight-name">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <common-gallary 
      :images="gallaryImgs" 
      v-show="showGallary"
      @closeGallary="hanleCloseGallary">
    </common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: 'DetailBanner',
    props: {
      bannerImg: String,
      sightName: String,
      gallaryImgs: Array
    },
    data: function() {
      return {
        showGallary: false
      }
    },
    components: {
      CommonGallary
    },
    methods: {
      handleBannerClick: function() {
        this.showGallary = true;
      },
      hanleCloseGallary: function() {
        this.showGallary = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      line-height: .6rem
      color: #fff
      position: absolute
      left: 0
      right: 0
      bottom: .1rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .sight-name
        flex: 1
        padding: 0 .2rem
        font-size: .32rem
        ellipsis()
      .banner-number
        height: .32rem
        line-height: .32rem
        padding: 0 .3rem
        margin-top: .14rem
        background-color: rgba(0, 0, 0, 0.8)
        border-radius: .2rem
        font-size: .24rem
        .banner-icon
          font-size: .24rem
          margin-right: .1rem
</style>
