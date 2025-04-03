import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';  // Assurez-vous que ce fichier existe et est exporté correctement
import Subscription from '@/views/Subscription.vue';  // Pareil ici
import Contact from '@/views/Contact.vue';  // Pareil ici

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory('/'),  
  routes
});

export default router;
