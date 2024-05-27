import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import "@/utils/request";
import "@/assets/styles/global.less";
import 'virtual:uno.css'
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
