<template>
  <div id="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {

    }
  },
  components: {
  }

}
</script>

<style scoped>
#tab{
  display: flex;
  text-align: center;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 49px;
  border-top: 1px solid #eee;
  
}
</style>