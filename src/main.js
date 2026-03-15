import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import { app as firebaseApp } from './firebase';
import 'metallicss'

const myApp = createApp(App);
myApp.use(Quasar);
myApp.mount('#app');