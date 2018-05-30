import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import route from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from '@/i18n'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload)

const router = new Router({
  mode: 'history',
  routes: route,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
Vue.use(Router)


new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
