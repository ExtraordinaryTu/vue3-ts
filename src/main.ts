import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入 vant
import 'vant/lib/index.css'
// 引入 lib-flexible 移动适配库
import 'lib-flexible/flexible.js'
// import { Button } from 'vant';


const app = createApp(App)

// vant 组件按需引入
// app
//   .use(Button)

app
  .use(createPinia())
  .use(router)

app
  .mount('#app')
