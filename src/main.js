import './index.css'
import './assets/main.css'

import { createApp, markRaw } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import { router } from './router'

import { plugin as formKitPlugin, defaultConfig as formKitDefaultConfig } from '@formkit/vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VAutocomplete } from 'vuetify/components/VAutocomplete'
import { VBreadcrumbs } from 'vuetify/components/VBreadcrumbs'
import { VPagination } from 'vuetify/components/VPagination'
import * as directives from 'vuetify/directives'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const vuetify = createVuetify({
  directives,
  aliases: {
    'app-filters-autocomplete': VAutocomplete,
    'app-breadcrumbs': VBreadcrumbs,
    'app-pagination': VPagination,
  }
})

const piniaInstance = createPinia().use(({store}) => store.router = markRaw(router))

createApp(App).use(router).use(piniaInstance).use(vuetify).use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false
}).use(formKitPlugin, formKitDefaultConfig()).mount('#app')
