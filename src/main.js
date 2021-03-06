// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUi from 'element-ui'
import VueParticles from 'vue-particles'
import 'element-ui/lib/theme-chalk/index.css';
import '@/font/iconfont.css';
import {default as api} from './api/api';

import vueg from 'vueg'
import 'vueg/css/transition-min.css'


Vue.use(vueg, router);

Vue.use(ElementUi);
Vue.use(VueParticles);

//修改axios原型链
 Vue.prototype.$api = api;
//修改echarts原型链
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
