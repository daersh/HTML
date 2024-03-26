import { createApp } from 'vue'
import App from './App.vue'



// 1. npm install vue bootstrap bootstrap-vue-3
import BootstrapVue from 'bootstrap-vue-3';
//2.
import 'bootstrap/dist/css/bootstrap.css'
//3.
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


// createApp(App).mount('#app')
const app = createApp(App)
app.use(BootstrapVue)
app.mount('#app');

