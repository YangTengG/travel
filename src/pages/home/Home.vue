<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-category></home-category>
    <home-recommend></home-recommend>
    <home-preference></home-preference>
    <home-weekend></home-weekend>
  </div> 
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeCategory from './components/Category'
  import HomeRecommend from './components/Recommend'
  import HomePreference from './components/Preference'
  import HomeWeekend from './components/Weekend'

  import axios from 'axios'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeCategory,
      HomeRecommend,
      HomePreference,
      HomeWeekend
    },
    data: function() {
      return {
        lastCity: ''
      }
    },
    computed: {
      ...mapState(["city"])
    },
    mounted: function() {
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    methods: {
      getHomeInfo: function() {
        axios.get('/api/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc: function(res) {
        console.log(res)
      }
    },
    activated: function() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
