import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import { createPinia } from 'pinia';

createApp(App)
  .use(createPinia())
  .use(BootstrapVue3)
  .use(store)
  .use(router)
  .mount('#app');
