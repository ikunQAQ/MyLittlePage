import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
AOS.init();
app.use(store);
app.mount('body');
