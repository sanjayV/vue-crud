import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import Routes from './routes';
import './css/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
