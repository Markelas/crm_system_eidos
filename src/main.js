import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vuetify/styles'
import '../src/assets/style.scss'
import { createVuetify } from 'vuetify'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css' //Чтобы отображались иконки из vuetify нужно npm install @mdi/font и import* '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(VueAxios, axios).use(mdiVue, {
    icons: mdijs,
    iconfont: 'mdi'
}).mount('#app')
