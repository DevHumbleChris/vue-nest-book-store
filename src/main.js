import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3Spinner from 'vue3-spinner'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(vue3Spinner)
app.use(router)

app.mount('#app')
