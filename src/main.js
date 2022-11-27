import { createApp } from "vue";
import App from "./App.vue";
import mitt from 'mitt'
//import "./assets/main.css";

let app = createApp(App)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.mount('#app')

