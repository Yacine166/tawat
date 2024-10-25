
// Import your components
import Home from '@/page/Home.vue';
import Login from '@/page/Login.vue';
import SignUp from '@/page/SignUp.vue';
import Introduction from '@/page/Welcome.vue';

// Define your routes
const routes = [
  { path: '/', component: Introduction , name: 'Introduction' , meta: { requiresAuth: false } },
  { path: '/signup', component: SignUp , name: 'SignUp' , meta: { requiresAuth: false } },
  { path: '/login', component: Login , name: 'Login', meta: { requiresAuth: false } },
  { path: '/home', component: Home  , name: 'Home', meta: { requiresAuth: true } },
];


export default routes;
