
import Vue from "vue"
import Vuex from "vuex"
import Mint from 'mint-ui';
import VueRouter from "vue-router"

import VueCookie from "vue-cookie"
import router from "./router/index"
import App from "./content/app.vue"

import "../src/common/css/styles.scss"
import "./static/font/iconfont.css"
import "swiper/dist/css/swiper.css"

Vue.use(Mint);
Vue.use(Vuex)
Vue.use(VueCookie);
Vue.use(VueRouter)
new Vue({
    el: "#app",
    render: h => h(App),
    router
})
