import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-page.vue";
import About from "@/views/About-page.vue";
import Login from "@/views/Login-page.vue";
import Create from "@/components/posts/Create.vue";
import Edit from "@/components/posts/Edit.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },
  { path: "/create", name: "Create", component: Create },
  { path: "/edit/:id", name: "Edit", component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
