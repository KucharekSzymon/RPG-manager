import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-page.vue";
import About from "@/views/About-page.vue";
import Login from "@/views/Login-page.vue";
import placeCreate from "@/components/places/Create.vue";
import placeEdit from "@/components/places/Edit.vue";
import placeHome from "@/components/places/Posts.vue";




const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },

  //places
  { path: "/place/create", name: "placeCreate", component: placeCreate },
  { path: "/places", name: "placeHome", component: placeHome },
  { path: "/place/edit/:id", name: "placeEdit", component: placeEdit },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
