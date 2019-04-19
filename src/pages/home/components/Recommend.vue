<template>
  <div class="recommend">
    <div class="module-title">本周推荐</div>
    <ul class="recommend-list">
      <router-link 
        tag="li"
        class="recommend-item" 
        v-for="item of recommendList" 
        :key="item.id"
        :to="'/detail/' + item.id">
        <div class="recommend-img-box">
          <img class="recommend-img" :src="item.imgUrl" alt="推荐">
        </div>
        <div class="scenic-info">
          <p class="scenic-name">{{ item.scenicName }}</p>
          <p class="scenic-price">￥{{ item.scenicPrice }} 起</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data: function() {
      return {
        recommendList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
            scenicName: '上海迪士尼乐园',
            scenicPrice: 399
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
            scenicName: '上海欢乐谷',
            scenicPrice: 150
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_250x250_133a005e.jpg',
            scenicName: '上海影视乐园',
            scenicPrice: 62
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
            scenicName: '东方明珠',
            scenicPrice: 85
          },
          {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg',
            scenicName: '上海杜莎夫人蜡像馆',
            scenicPrice: 127.9
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend
    padding: .2rem 0
    border-top: .2rem solid #f5f5f5
    .module-title
      font-size: .32rem
      line-height: .36rem
      padding-left: .24rem
      margin-bottom: .2rem
    .recommend-list
      padding: 0 .24rem
      overflow-x: scroll
      white-space: nowrap
      .recommend-item
        width: 2rem
        padding-bottom: .2rem
        display: inline-block
        &:not(:first-child)
          margin-left: .12rem
        .recommend-img-box
          overflow: hidden
          height: 0
          padding-bottom: 100%
          .recommend-img
            width: 100%
        .scenic-info
          font-size: .24rem
          text-align: center
          color: #666
          .scenic-name
            margin-top: .12rem
            line-height: .32rem
            ellipsis()
          .scenic-price
            line-height: .36rem
            ellipsis()
          
</style>
