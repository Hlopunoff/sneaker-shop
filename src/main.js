import './index.css'
import './assets/main.css'

import { createApp } from 'vue'
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

const vuetify = createVuetify({
  directives,
  aliases: {
    'app-filters-autocomplete': VAutocomplete,
    'app-breadcrumbs': VBreadcrumbs,
    'app-pagination': VPagination,
  }
})

createApp(App).use(router).use(createPinia()).use(vuetify).use(formKitPlugin, formKitDefaultConfig()).mount('#app')
