import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

createApp(App).use(router).mount("#app");
