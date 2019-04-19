<template>
  <div class="alphabet">
    <ul class="list"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      <li class="item" 
        v-for="letter of letters"
        :key="letter"
        :ref="letter"
        @click="handleLetterClick">
        {{letter}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      letters: Array
    },
    data: function() {
      return {
        touchStatus: false,
        timer: null
      }
    },
    methods: {
      handleLetterClick: function(e) {
        this.$emit('letterChange', e.target.innerText);
      },
      handleTouchStart: function(e) {
        this.touchStatus = true;
      },
      handleTouchMove: function(e) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          var headerHeight = 79;
          var elHeight = 18;

          var startY = this.$refs["#"][0].offsetTop;
          var touchY = e.touches[0].clientY - headerHeight;
          var index = Math.floor((touchY - startY) / elHeight);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letterChange', this.letters[index]);
          }
        }, 16);
      },
      handleTouchEnd: function(e) {
        this.touchStatus = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    width: .36rem
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
      line-height: .36rem
      color: $bgColor
</style>
