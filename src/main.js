import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import {CommonParams} from './api/config'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

axios.get('/api/cgi-bin/musicu.fcg',CommonParams)
  .then(response => {
    console.log(response);
  });