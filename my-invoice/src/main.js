import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import { Icon } from '@iconify/vue';
import router from './router/router';
import vuex from './store/index';

createApp(App).use(router).use(vuex).use(Icon).mount('#app');
