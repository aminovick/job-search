import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
const routes = [
  {
    path: "/",
    component: HomeView,
    name: "Home",
  },
  {
    path: "/jobs/results",
    component: JobResultsView,
    name: "JobResults",
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
