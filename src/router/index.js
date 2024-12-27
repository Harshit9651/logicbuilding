import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Coding from '../views/Coding.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/challenge/:days/:language',
    name: 'Challenge',
    component: () => import('../views/Challenge.vue')
  },
  {
    path: '/code',
    name: 'code',
    component:Coding 

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;