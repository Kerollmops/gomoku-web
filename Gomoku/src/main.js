import '../theme/index.css'
//import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'

// TODO: chnage by importing element one by one
// http://element.eleme.io/#/en-US/component/i18n#internationalization

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  render: h => h(App)
})
