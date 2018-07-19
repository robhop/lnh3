// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import "leaflet/dist/leaflet.css"
import VueResource from 'vue-resource'
import VueLodash from 'vue-lodash'

Vue.use(VueResource)
Vue.use(VueLodash)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
