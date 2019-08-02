import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layouts/MainLayout';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: MainLayout,
    children: [{
      path: '/',
      name: 'landing',
      component: () => import( /* webpackChunkName: "demo" */ './views/pages/Landing.vue')
    }]
  }],
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: {
          x: 0,
          y: 60
        }
      }
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
})