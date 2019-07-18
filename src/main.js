import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Takada from './plugins/main-kit';

Vue.config.productionTip = false
Vue.use(Takada);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')