import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router'

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

createApp(App).use(router).use(vuetify).mount('#app')
