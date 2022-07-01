import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ExampleView from "../views/ExampleView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ExampleView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
