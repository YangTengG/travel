<template>
  <div class="list" ref="listWrapper">
    <div>
      <div class="area" ref="#">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currenCity }}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" 
            v-for="item of hotCities" 
            :key="item.id"
            v-on:click="handleCityClick">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <div class="area" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="city-list">
          <div class="city-item border-bottom" 
            v-for="city of item" 
            :key="city.id"
            v-on:click="handleCityClick">
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    data: function() {
      return {
        
      }
    },
    computed: {
      currenCity: function() {
        return this.$store.state.city;
      }
    },
    mounted: function() {
      this.scroll = new Bscroll(this.$refs.listWrapper, {
        click: true
      });
    },
    methods: {
      handleCityClick: function(e) {
        this.$store.dispatch("changeCity", e.target.innerText);
        this.$router.push('/');
      }
    },
    watch: {
      letter: function() {
        if (this.letter) {
          var element = this.letter == '#' ? this.$refs[this.letter] : this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &::before
      border-color: #ccc
    &::after
      border-color: #ccc
  .border-bottom
    &::before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      font-size: .26rem
      line-height: .54rem
      color: #666
      padding-left: .2rem
      background-color: #eee
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .city-list
      .city-item
        line-height: .76rem
        padding-left: .2rem
</style>
