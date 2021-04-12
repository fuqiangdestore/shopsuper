<template>
  <div id="PopularView">
    <h4>本周流行</h4>
    <!-- <div>{{this.recommends}}</div> -->
    <div class="pop-item" v-for="(item, index) in popData" :key="index">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'PopularView',
  props: {
    recommends: {
      default: null,
      type:Array
    }
  },
  data() {
    return {
      popData:[],

    }
  },
  created() {
    this.changeData()
  },
  mounted() {
  },
  methods: {
    changeData() {
      // this.popData = this.popData.push(...this.recommends)
      console.log('popularview',this.recommends);
    }

  },
  components: {

  },
  computed: {

  }

}
</script>

<style scoped>
#PopularView{
  width: 100%;
  height: 300px;
  background-color: antiquewhite;
  display: flex;
}
.pop-item{
flex: 1;
}
.pop-item img{
  width: 65px;
  height: 65px;
}

</style>