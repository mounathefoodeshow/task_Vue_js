import  { createApp }  from 'vue'
import './index.css'
import router from './Router/router.js'
import App from './components/App.vue'



const app=createApp(App)

app.use(router);
app.mount('#app')