import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Print from 'vue-print-nb'
Vue.use(Print);  //注册
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
