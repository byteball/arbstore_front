import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fancybox.min.css';
import './assets/css/main.css';

createApp(App).use(store).use(router).use(Notifications).mount('#app')


