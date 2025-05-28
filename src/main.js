import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router/router";
import { Application } from "@hotwired/stimulus";

// Theme for highlight.js
import "highlight.js/styles/tokyo-night-dark.min.css";

// Controllers
import CodeHighlightController from "@/controllers/code_highlight_controller";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

window.Stimulus = Application.start();
Stimulus.register("code-highlight", CodeHighlightController);

app.use(pinia);
app.use(router);
app.mount("#app");
