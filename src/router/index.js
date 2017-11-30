import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/demo/HelloWorld'
import Home from '@/components/home/home'
import Login from '@/components/login/login'
import {Cache} from 'kalix-base'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/demo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '/:app', name: 'header', component: Home},
        {path: '/:app/:fun', name: 'navigater', component: Home}
      ]
    },
    {path: '/404', name: '404', component: _import('errorPage/404')},
    {path: '/401', name: '401', component: _import('errorPage/401')},
    {path: '*', redirect: '/404', hidden: true}
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('router is to ', to)
  if (!to.path.search(/\/qrcode\//i)) {
    // 进入二维码页面
    next()
    return
  }
  if (Cache.get('id') === null && to.name !== 'login' && to.name !== 'qrcode' && to.name !== 'qrcodelogin') {
    next({path: '/login'})
  }
  next()
})

export default router
