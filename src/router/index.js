import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello1 from '@/components/hello1'
import hello2 from '@/components/hello2'
import hello3 from '@/components/hello3'
import hello4 from '@/components/hello4'
import hello5 from '@/components/hello5'
import hello0 from '@/components/hello0'
import hello6 from '@/components/hello6'
import hello7 from '@/components/hello7'
import hello8 from '@/components/hello8'
import elDemo1 from '@/components/el-demo1'
import vuexDemo1 from '@/components/vuex-demo1'
import vuexDemo2 from '@/components/vuex-demo2'
import hello9 from '@/components/hello9'
import vuexDemo3 from '@/components/vuex-demo3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello1',
      name: 'hello1',
      component: hello1
    },
    {
      path: '/hello2',
      name: 'hello2',
      component: hello2
    },
    {
      path: '/hello3',
      name: 'hello3',
      component: hello3
    },
    {
      path: '/hello4',
      name: 'hello4',
      component: hello4
    },
    {
      path: '/hello5',
      name: 'hello5',
      component: hello5
    },
    {
      path: '/hello0',
      name: 'hello0',
      component: hello0
    },
    {
      path: '/hello6',
      name: 'hello6',
      component: hello6
    },
    {
      path: '/hello7',
      name: 'hello7',
      component: hello7
    },
    {
      path: '/hello8',
      name: 'hello8',
      component: hello8
    },
    {
      path: '/el-demo1',
      name: 'el-demo1',
      component: elDemo1
    },
    {
      path: '/vuex-demo1',
      name: 'vuex-demo1',
      component: vuexDemo1
    },
    {
      path: '/vuex-demo2',
      name: 'vuex-demo2',
      component: vuexDemo2
    },
    {
      path: '/hello9',
      name: 'hello9',
      component: hello9
    },
    {
      path: '/vuex-demo3',
      name: 'vuex-demo3',
      component: vuexDemo3
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
