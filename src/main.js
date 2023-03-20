import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

import './assets/app.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 10,
    newestOnTop: true
});

app.mount('#app')
