import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThumbsUp, faThumbsDown, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faThumbsUp, faThumbsDown, faUser)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
