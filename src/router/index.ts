import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/echarts",
      name: "echarts",
      component: () => import("@/views/echarts/index.vue"),
      meta: {
        title: "数据大屏",
      },
    },
  ],
});
export default router;
