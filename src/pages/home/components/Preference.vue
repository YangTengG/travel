<template>
  <div class="preference">
    <div class="module-title">猜你喜欢</div>
    <div class="preference-list">
      <ul>
        <router-link 
          tag="li"
          class="prefer-item" 
          v-for='item of preferenceList'
          :key="item.id"
          :to="'/detail/' + item.id">
          <img class="prefer-img" :src="item.imgUrl" alt="猜你喜欢">
          <div class="prefer-info">
            <p class="name">{{ item.scenicName }}</p>
            <p class="summary">{{ item.scenicSummary }}</p>
            <p class="price">
              <span class="price-text">￥<span class="price-num">{{ item.scenicPrice }}</span></span>
               起
            </p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePreference',
    data: function() {
      return {
        preferenceList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
            scenicName: '上海迪士尼乐园',
            scenicSummary: '上海迪士尼乐园上海迪士尼乐园',
            scenicPrice: 399
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
            scenicName: '上海欢乐谷',
            scenicSummary: '上海迪士尼乐园上海迪士尼乐园',
            scenicPrice: 150
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_250x250_133a005e.jpg',
            scenicName: '上海影视乐园',
            scenicSummary: '上海迪士尼乐园上海迪士尼乐园',
            scenicPrice: 62
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
            scenicName: '东方明珠',
            scenicSummary: '上海迪士尼乐园上海迪士尼乐园',
            scenicPrice: 85
          },
          {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg',
            scenicName: '上海杜莎夫人蜡像馆',
            scenicSummary: '上海迪士尼乐园上海迪士尼乐园',
            scenicPrice: 127.9
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .preference
    padding: .2rem .24rem
    border-top: .2rem solid #f5f5f5
    .module-title
      font-size: .32rem
      line-height: .36rem
      padding-left: .04rem
      margin-bottom: .2rem
    .prefer-item
      display: flex
      padding: .1rem 0
      &:not(:first-child)
        margin-top: .2rem
      .prefer-img
        width: 2rem
        height: 2rem
      .prefer-info
        flex: 1
        margin-left: .2rem
        padding: .2rem 0
        min-width: 0
        position: relative
        .name
          line-height: .36rem
          ellipsis()
        .summary
          font-size: .24rem
          line-height: .32rem
          color: #666
          margin-top: .1rem
          ellipsis()
        .price
          font-size: .24rem
          position: absolute
          left: 0
          bottom: .2rem
          .price-text
            color: #ff8300
          .price-num
            font-size: .32rem
      
</style>
