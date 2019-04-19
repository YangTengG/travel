<template>
  <div class="gallary" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of images" :key="index">
          <img class="gallary-img" :src="item" alt="gallary" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonGallary',
    props: {
      images: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    data: function() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        }
      }
    },
    methods: {
      handleGallaryClick: function() {
        this.$emit('closeGallary')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallary
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 10
    background-color: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-container
        overflow: inherit
        .swiper-pagination
          color: #fff
          bottom: -1rem
</style>
