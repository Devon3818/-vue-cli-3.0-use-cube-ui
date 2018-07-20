import Vue from 'vue'
import App from './App.vue'

import Cube from 'cube-ui'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
