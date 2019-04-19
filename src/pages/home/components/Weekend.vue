<template>
  <div class="weekend">
    <div class="module-title">周末去哪儿</div>
    <div class="weekend-list">
      <ul>
        <li class="weekend-item" v-for='item of weekendList'>
          <div class="weekend-img-container">
            <img class="weekend-img" :src="item.imgUrl" alt="周末去哪儿">
          </div>
          <div class="weekend-info">
            <p class="name">{{ item.scenicName }}</p>
            <p class="summary">{{ item.scenicSummary }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data: function() {
      return {
        weekendList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
            scenicName: '上海必打卡',
            scenicSummary: '中西合璧，现代和传统各有各的精彩'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
            scenicName: '上海看花',
            scenicSummary: '这个好天气，一起去看花吧'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
            scenicName: '上海城市观光',
            scenicSummary: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
            scenicName: '情迷博物馆',
            scenicSummary: '走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .weekend
    .module-title
      height: .8rem
      line-height: .8rem
      padding-left: .24rem
      background-color: #f5f5f5
    .weekend-item
      border-bottom: .1rem solid #f5f5f5
      .weekend-img-container
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .weekend-img
          width: 100%
      .weekend-info
        padding: .2rem
        .name
          font-size: .28rem
          line-height: .48rem
          ellipsis()
        .summary
          font-size: .24rem
          line-height: .28rem
          color: #666
          ellipsis()
</style>
