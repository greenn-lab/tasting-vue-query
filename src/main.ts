import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

const QUERY_STALE_TIME = 1000 * 30

app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: QUERY_STALE_TIME,
        retry: 2
      }
    }
  }
})
app.use(router)

app.mount('#app')
