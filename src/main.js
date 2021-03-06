import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUIComponents from '@/config/elementUI'
import 'element-ui/lib/theme-chalk/index.css';
import store from "./vuex/store";

Vue.config.productionTip = false

Vue.use(elementUIComponents) // 优雅注册组件

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
