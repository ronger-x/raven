import Vue from 'vue';
import App from './App.vue';
import router from './router';
import  './plugins/element';
import vueAxios from './plugins/axios';
import './plugins/element.js';
import './assets/css/icon.css';
import store from './store'

Vue.use(vueAxios());

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
