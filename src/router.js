import { createRouter, createWebHistory } from "vue-router";
import TheContact from "@/components/TheContact.vue";
import aPropos from "@/components/aPropos.vue";
import notFound from "@/components/notFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.BASE_url),
  routes: [
    {
      path: "/",
      name: "aPropos",
      component: aPropos,
    },
    {
      path: "/TheContact",
      name: "TheContact",
      component: TheContact,
    }/*,
    {
      path: "/navBarre",
      name: "navBarre",
      component: navBarre,
    },
    {
      path: "/TheFooter",
      name: "TheFooter",
      component: TheFooter,
    }*/,
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: notFound,
    },
  ],
});

export default router;
