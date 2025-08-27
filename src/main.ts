import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Buffer } from 'buffer'

import App from './App.vue'
import router from './router'
import './styles/main.css'

// Make Buffer available globally for gray-matter
(globalThis as any).Buffer = Buffer

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
