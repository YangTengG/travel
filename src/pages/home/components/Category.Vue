<template>
  <div class="category">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(swiperPage, index) of swiperPages" :key="index">
        <div class="cate-item" v-for="item of swiperPage" :key="item.id">
          <div class="cate-img-box">
            <img :src="item.imgUrl" alt="分类" class="cate-img">
          </div>
          <p class="cate-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeCategory',
    data: function() {
      return {
        swiperOption: {

        },
        cateList: [
          {
            cateId: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            cateId: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            cateId: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },
          {
            cateId: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc: '动植物园'
          },
          {
            cateId: '005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '踏青赏花'
          },
          {
            cateId: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            desc: '辰山植物园'
          },
          {
            cateId: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            desc: '迪士尼'
          },
          {
            cateId: '008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc: '动植物园'
          },
          {
            cateId: '009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '踏青赏花'
          },
          {
            cateId: '010',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            desc: '辰山植物园'
          },
          {
            cateId: '011',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            desc: '迪士尼'
          }
        ]
      }
    },
    computed: {
      swiperPages: function() {
        var pages = [];
        this.cateList.forEach(function(item, index) {
          var page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item)
        });
        return pages;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .category
    padding: .1rem 0 .2rem
    .cate-item
      position: relative
      width: 25%
      float: left
      height: 0
      padding-bottom: 22%
      .cate-img-box
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        padding: .1rem
        box-sizing: border-box
        .cate-img
          display: block
          height: 100%
          margin: 0 auto
      .cate-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
</style>
