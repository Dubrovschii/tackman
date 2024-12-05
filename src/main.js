import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import gsap from 'gsap'
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
})


const settings = {
    apiKey: '48903a31-52d3-427c-abf7-68fcf31270b9', // Замените на ваш API-ключ
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
};

app.component('VueDatePicker', VueDatePicker);
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(gsap)
app.use(YmapPlugin, settings)
app.mount('#app')

