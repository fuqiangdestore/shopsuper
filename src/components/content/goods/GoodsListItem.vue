<template>
  <div class="goodsitem">
    <div class="good_img">
      <img :src="goodsItem.show.img" alt="">
    </div>
    <div class="good_text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodslistitem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style lang='less' scoped>
.goodsitem{
  width: 45%;
  .good_img{
    width: 170px;
    height: 250px;
    margin: 5px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .good_text{

  }
}


</style>