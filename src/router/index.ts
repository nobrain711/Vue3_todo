import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import List from '@/components/Todo/List.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:status?',
    name: 'list',
    component: List,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
