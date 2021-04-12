<template>
  <div class="goods">
    <goods-list-item
      class="goods_item"
      v-for="(item, index) of goods"
      :key="index"
      :goods-item="item"
      ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'goodslist',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }

  },
  data() {
    return {

    }
  },
  created() {
console.log(this.goods)
  },
  methods: {

  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
.goods{
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  .goods_item{

  }
}

</style>