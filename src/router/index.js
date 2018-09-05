import Vue from 'vue'
import Router from 'vue-router'
import wrapper from '@/views/wrapper.vue'
import enlarge from '@/views/enlarge.vue'
import test from '@/views/test.vue'
import leftHeader from '@/views/components/leftHeader'
import leftMain from '@/views/components/leftMain'
import leftFooter from '@/views/components/leftFooter'
import mainMain from '@/views/components/mainMain'
import mainFooter from '@/views/components/mainFooter'
import rightHeader from '@/views/components/rightHeader'
import rightMain from '@/views/components/rightMain'
import rightFooter from '@/views/components/rightFooter'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: wrapper
    },
    {
      path: '/enlarge',
      component: enlarge,
      children: [
        { path: '/leftHeader', component: leftHeader },
        { path: '/leftMain', component: leftMain },
        { path: '/leftFooter', component: leftFooter },
        { path: '/mainMain', component: mainMain },
        { path: '/mainFooter', component: mainFooter },
        { path: '/rightHeader', component: rightHeader },
        { path: '/rightMain', component: rightMain },
        { path: '/rightFooter', component: rightFooter }
      ]


    },
    {
      path: '/test',
      component: test
    }

  ]
})
