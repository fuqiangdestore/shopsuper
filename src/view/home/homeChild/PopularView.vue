<template>
  <div id="PopularView">
    <h4>本周流行</h4>
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
    recommends: {}
  },
  data() {
    return {
      popData:[],

    }
  },
  created() {
  },
  mounted() {
    this.changeData()
  },
  methods: {
    changeData() {
      console.log('popularview',this.recommends);
      this.popData = this.recommends.concat(this.recommends)
      console.log('popData',this.popData)
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