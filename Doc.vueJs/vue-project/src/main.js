import  { createApp }  from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import router from './Router/router.js'
import App from './components/App.vue'



const app=createApp(App)
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.mount('#app')