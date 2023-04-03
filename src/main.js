import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import Carousel from '@/components/carousel'
import Pagination from '@/components/Pagination'
import { MessageBox } from 'element-ui'
//统一引入api文件里全部的请求函数
import * as API from '@/api'
//引入表单验证插件
// import '@/plugins/validate'


Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert



new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
