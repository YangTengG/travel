<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-result" ref="result" v-show="keyword">
      <ul>
        <li class="result-item border-bottom" 
          v-for="item of searchResult"
          @click="handleCityClick">
          {{ item.name }}
        </li>
        <li class="result-item no-data" v-show="hasNoData">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data: function() {
      return {
        keyword: '',
        searchResult: [],
        timer: null
      }
    },
    computed: {
      hasNoData: function() {
        return !this.searchResult.length;
      }
    },
    mounted: function() {
      this.scroll = new Bscroll(this.$refs.result, {
        click: true
      });
    },
    watch: {
      keyword: function() {
        if (!this.keyword) {
          this.searchResult = [];
          return;
        }

        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.getCityByKeyworld();
        }, 100);
      }
    },
    methods: {
      getCityByKeyworld: function() {
        var result = [];
        for (var i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item);
            }
          });
        }
        this.searchResult = result;
      },
      handleCityClick: function(e) {
        this.$store.dispatch('changeCity', e.target.innerText);
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    position: relative
    z-index: 5
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      color: #666
      text-align: center
      border-radius: .06rem
      box-sizing: border-box
  .search-result
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 5
    background-color: #eee
    .result-item
      color: #666
      line-height: .6rem
      padding-left: .24rem
      background-color: #fff
    .no-data
      text-align: center
      color: #ccc
      
</style>
