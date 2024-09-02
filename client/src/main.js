import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './components/Home.vue'  
import Cinema from './components/Cinema.vue'
import Funciones from './components/Function'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path: '/',
        name: 'home',
         component: Home 
      },

      {path: '/pelicula/:titulo',
         name:'cinema', 
         component: Cinema,
         props: true
      },

      { path: '/funciones/:id',
        name: 'funciones',
        component: Funciones}
    ]
  })
createApp(App).use(router).mount('#app')
