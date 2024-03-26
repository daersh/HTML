import { createApp } from 'vue'
import router from './router/01_router.js'
import App from './App.vue'

// 라우터 설정하기 위해선는 아래로 사용한다.
const app = createApp(App);
app.use(router);
app.mount('#app');

