import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style/global.scss'
import mixins from './plugins/mixin';
import Home from './home.vue'
import HelloWorld from './components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/hello', name: 'hello', component: HelloWorld },
  ]
})
const app = createApp(App)

app.use(router)
app.mixin(mixins)

app.mount('#app')