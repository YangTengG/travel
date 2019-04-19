<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
      :cities="cities" 
      :hotCities="hotCities"
      :letter="letter">
    </city-list>
    <city-alphabet 
      :letters="letters"
      @letterChange="handleLetterChange">
    </city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'

  import axios from 'axios'
  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data: function() {
      return {
        hotCities: [],
        cities: {},
        letter: ''
      }
    },
    computed: {
      letters: function() {
        var letters = [];
        for (var i in this.cities) {
          letters.push(i);
        }
        letters.unshift('#');
        return letters;
      }
    },
    mounted: function() {
      this.getCitiesData();
    },
    methods: {
      getCitiesData: function() {
        axios.get('/api/city.json')
          .then(this.getCitiesDataSucc);
      },
      getCitiesDataSucc: function(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.hotCities = data.hotCities;
          this.cities = data.cities;
        }
      },
      handleLetterChange: function(letter) {
        this.letter = letter;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
