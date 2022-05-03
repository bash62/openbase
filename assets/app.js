
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// start the Stimulus application
import './bootstrap';
import './css/tailwinds.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


const app = createApp(App)

app.use(createPinia())

app.mount('#app')
