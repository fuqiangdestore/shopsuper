<template>
  <div id="app">
    <router-view></router-view>
    <main-tab></main-tab>
  </div>
</template>

<script>
import MainTab from './components/content/maintab/MainTab'
export default {
  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style>
body{

}
  #app{
   height: 100%; 
  }
@import './assets/css/base.css';
</style>
