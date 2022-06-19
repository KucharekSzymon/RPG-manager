import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-page.vue";
import About from "@/views/About-page.vue";
import Login from "@/views/Login-page.vue";
import Create from "@/components/posts/Create.vue";
import postsHome from "@/components/posts/postsHome.vue";



const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },
  { path: "/create", name: "Create", component: Create },
  { path: "/posts", name: "postsHome", component: postsHome },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
