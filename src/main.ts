import './assets/main.css'

// 由于引入了unplugin，所以可以直接引用
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'



const app = createApp(App)
console.log(router)

// app.use(Antd)
app.use(router)
app.mount('#app')
console.log(App)