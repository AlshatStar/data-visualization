import Vue from 'vue'
import Router from 'vue-router'
import wrapper from '@/views/wrapper.vue'
import enlarge from '@/views/enlarge.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: wrapper
    },
    {
      path: '/enlarge',
      component: enlarge
    }

  ]
})
