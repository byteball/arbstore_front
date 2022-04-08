import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'
import VueGtag from "vue-gtag";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fancybox.min.css';
import './assets/css/main.css';

const app = createApp(App).use(store).use(router).use(Notifications);
if (!window.location.hostname.includes('testnet.')) {
	app.use(VueGtag, {
		config: { id: process.env.GOOGLE_ANALYTICS_ID }
	}, router);
}
app.mount('#app')


