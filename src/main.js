import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router/router";
// Theme for highlight.js
import 'highlight.js/styles/tokyo-night-dark.min.css';


import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
