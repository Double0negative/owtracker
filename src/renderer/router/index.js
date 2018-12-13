import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home').default
    },
    {
      path: "/account/:account",
      name: "account",
      component: require("@/views/Wrapper").default,
      children:[
        {
          path: '/history',
          name: 'history',
          component: require('@/views/History').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
