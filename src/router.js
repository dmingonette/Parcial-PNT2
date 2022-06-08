import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioNotas from './components/FormularioNotas.vue'
import Respuestas from './components/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/', redirect: '/formulario'},
        {path: '/formulario', component: FormularioNotas},
        {path: '/respuestas', component: Respuestas},
        
    ]
})