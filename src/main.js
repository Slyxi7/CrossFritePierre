import { createApp } from 'vue'; // Importez createApp au lieu de Vue
import App from './App.vue';
import router from './router';
import './assets/style.css';

const app = createApp(App); // Créez une instance de l'application avec createApp
app.use(router); // Utilisez le router
app.mount('#app'); // Montez l'application dans l'élément avec l'ID 'app'
