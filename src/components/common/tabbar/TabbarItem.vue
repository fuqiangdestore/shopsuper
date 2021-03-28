<template>
  <div id="tab_item" @click="tabChange">
    <div v-if="!isActive"><slot  name="tab_icon"></slot></div>
    <div v-else><slot name="tab_icon_active"></slot></div>
    <div :style="activeStyle">
      <slot name="tab_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color:this.activeColor}: {}
    }
  },
  methods: {
    tabChange() {
      console.log(this.$router,)
      this.$router.push(this.path)
    }

  }
}
</script>

<style>
#tab_item{
  flex:1;
}
#tab_item img{
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.tab_text{
      font-size: 12px;
    margin-top: 3px;
    color: #333;
}
</style>