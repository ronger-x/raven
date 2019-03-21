import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './plugins/element'
import vueAxios from './plugins/axios'
import './plugins/element.js'

Vue.use(vueAxios());

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
