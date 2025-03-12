import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import Vuex store
import './firebase'; // Ensure Firebase is initialized
import './assets/main.css'

createApp(App).use(router).use(store).mount('#app'); // Use Vuex store
