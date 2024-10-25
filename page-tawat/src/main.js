import '@/assets/main.css'; // Your custom styles
import 'bootstrap'; // Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// Import Quasar
import '@quasar/extras/material-icons/material-icons.css'; // Quasar Material Icons
import 'quasar/dist/quasar.css'; // Quasar styles

import { Quasar } from 'quasar'; // Import Quasar
import { createApp } from 'vue';
import App from './App.vue';
import quasarUserOptions from './quasar-user-options'; // Quasar configuration
import router from './router';

// import store
import store from './functions/store';
// Create Vue App
const app = createApp(App);

// Use Quasar and the router
app.use(Quasar, quasarUserOptions); // Apply Quasar configuration
app.use(router);
app.use(store);

// Mount the app to the DOM
app.mount('#app');
