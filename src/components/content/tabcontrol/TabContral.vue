<template>
  <div class="tab_control">
    <div class="tab_control_item"
         :class="{active: index === activeIndex}"
         @click="tabCilck(index)"
         v-for="(item,index) in titles"
         :key="index"
        >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    tabCilck(index) {
      this.activeIndex = index
    }
  }

}
</script>

<style>
.tab_control{
  display: flex;
  text-align: center;
  font-size: 15px;
}

.tab_control_item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab_control_item span{
  padding: 5px 0;
}
.active{
  color: red;
}
.active  span{
  border-bottom: red 3px solid;

}

</style>