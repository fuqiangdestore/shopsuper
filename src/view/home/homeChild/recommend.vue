<template>
  <div id="recommend">
    <div class="contain" v-for="(item, index) in recommends" :key="index">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommends: {
      default() {
        return []
      },
      type: Array
    }
  },
  data() {
    return {
      recomData: []
    }
  },
  computed: {

  },
  created() {
  this.case()
  },
  methods: {
    case() {
      console.log('recommends11',this.recommends)

    }

  }


}
</script>

<style>
#recommend{
  display:flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 10px;
  border-bottom: 8px solid #eee;
}
.contain{
  flex: 1;
}

.contain img{
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}

</style>