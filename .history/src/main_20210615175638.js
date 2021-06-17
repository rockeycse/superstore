// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Hello from './components/Hello'
// import Test from './components/Test'

window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {
    routes
} from './router/router.js'

import Vuex from 'vuex'

Vue.use(Vuex)

import {
    storage
} from './store/index'

const store = new Vuex.Store(storage);


const router = new VueRouter({
        // mode: 'history',
        routes
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})