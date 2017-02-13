import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import pullToRefresh from './directives/pullToRefresh'
import infiniteScroll from './directives/infiniteScroll'
import * as filters from './filters'
import store from './vuex/store'
import App from './App'

Vue.use(VueRouter)
// Resource
Vue.use(VueResource)
// Vue.http.options.headers = {
//   'Content-Type': 'application/json; charset=utf-8'
// }
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  routes: routerConfig,
  suppressTransitionError: true
})

console.log('now env is: ' + process.env.NODE_ENV)
Vue.http.options.root = process.env.NODE_ENV === 'development' ? '/static/data' : '/static/data'
Vue.http.options.emulateJSON = true

// Directive
Vue.directive('pullToRefresh', pullToRefresh)
Vue.directive('infiniteScroll', infiniteScroll)

// Filters
Vue.filter('date', filters.dateFilter)
Vue.filter('statefilter', filters.stateFilter)
Vue.filter('sexfilter', filters.stateSex)

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
