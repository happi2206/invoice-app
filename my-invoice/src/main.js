import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import { Icon } from '@iconify/vue';
import router from './router/router';

createApp(App).use(router).use(Icon).mount('#app');
