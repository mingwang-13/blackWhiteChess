import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import create from '@/components/create'
import myinfo from '@/components/myinfo'
import special from '@/components/special'
import animation from '@/components/animation'
import game from '@/components/game'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/list',
          name: 'list',
          component: list
        },
        {
          path: '/create',
          name: 'create',
          component: create
        },
        {
          path: '/myinfo',
          name: 'myinfo',
          component: myinfo
        },
        {
          path: '/special',
          name: 'special',
          component: special
        },
        {
          path: '/animation',
          name: 'animation',
          component: animation
        },
        {
          path: '/game',
          name: 'game',
          component: game
        }
      ]
    },
 
  ]
})
