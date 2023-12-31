import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/style/normalize.css";
import "@/style/style.css";
import "@/style/fonts.css";

createApp(App).use(router).mount("#app");
