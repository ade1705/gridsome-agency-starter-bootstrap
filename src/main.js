// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '~/assets/custom.scss'
config.autoAddCss = false;
library.add(faInstagram, faTwitterSquare, faFacebookSquare)


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
      Vue.use(BootstrapVue),
      Vue.component('font-awesome', FontAwesomeIcon)
}
