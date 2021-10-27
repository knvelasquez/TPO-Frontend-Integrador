// eslint-disable-next-line
/* eslint-disable */
import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import routes from './routes'

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's keep it simple for now.

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create and mount the root instance.

const app=createApp(App)

// Make sure to _use_ the router instance to make the whole app router-aware.
app.use(router)

app.mount('#app')
// Now the app has started!