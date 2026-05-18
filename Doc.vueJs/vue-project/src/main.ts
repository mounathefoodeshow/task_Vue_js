import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './components/App.vue'
import './index.css'
import router from './Router/router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
