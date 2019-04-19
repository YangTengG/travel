<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of sliderList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="banner">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data: function() {
      return {
        swiperOption: {
          autoplay: 5000,
          loop: true,
          effect: 'coverflow',
          pagination: '.swiper-pagination'
        },
        sliderList: [
          {
            id: '0001',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg'
          },
          {
            id: '0002',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active
    background: #fff  
  .wrapper
    overflow: hidden
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>
