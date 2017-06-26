import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router/index'
Vue.use(VueRouter)
const router = new VueRouter({
	routes:routers
})

new Vue({
  router

}).$mount('#app')
