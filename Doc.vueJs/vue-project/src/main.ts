import { createApp } from 'vue'
import App from './components/App.vue'
import './index.css'
import router from './Router/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
