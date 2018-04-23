import Vue from 'vue'
import App from './rank-list'

import store from '../../store'

const app = new Vue({
  store,
  ...App
})
app.$mount()