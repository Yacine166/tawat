import { createRouter, createWebHistory } from 'vue-router';
import store from '../functions/store';
import routes from './routes';

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // HTML5 history mode
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated; // Use Vuex getter
  console.log(`Navigating to: ${to.path}, isAuthenticated: ${isAuthenticated}`);

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ path: '/login' }); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router;
