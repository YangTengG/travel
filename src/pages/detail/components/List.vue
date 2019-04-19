<template>
  <div class="detail-list">
    <div class="base-info"></div>
  </div>
</template>

<script>
  export default {
    name: 'DetailList',
    props: {
      categoryList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .base-info
    height: 20rem
    padding: .24rem
    background: #fff
    position: relative
    top: -.1rem
    border-radius: .1rem .1rem 0 0
</style>
