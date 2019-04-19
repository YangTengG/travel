<template>
  <div class="detail">
    <detail-header :sightName="sightName"></detail-header>
    <detail-banner 
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs">
    </detail-banner>
    <detail-list :categoryList="categoryList"></detail-list>
  </div>
</template>

<script>
  import DetailHeader from './components/Header'
  import DetailBanner from './components/Banner'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: 'Detail',
    components: {
      DetailHeader,
      DetailBanner,
      DetailList
    },
    data: function() {
      return {
        sightName: '',
        bannerImg: '',
        categoryList: [],
        gallaryImgs: []
      }
    },
    mounted: function() {
      console.log("detail mounted")
      this.getDetailInfo();
    },
    methods: {
      getDetailInfo: function() {
        axios.get('/api/detail.json')
            .then(this.getDetailInfoSucc);
      },
      getDetailInfoSucc: function(res) {
        res = res.data;
        if (res.ret && res.data) {
          var data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.categoryList = data.categoryList;
          this.gallaryImgs = data.gallaryImgs
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
