import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/reset.scss'
import './assets/scss/_variables.sass'
import store from "@/store";

createApp(App)
    .use(store)
    .mount('#app')