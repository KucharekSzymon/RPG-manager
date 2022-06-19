import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-page.vue";
import Login from "@/views/Login-page.vue";
import place from "@/components/places/Post.vue";
import placeCreate from "@/components/places/Create.vue";
import placeEdit from "@/components/places/Edit.vue";
import placeHome from "@/components/places/Posts.vue";




const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },

  //places
  { path: "/places", name: "placeHome", component: placeHome },
  { path: "/place/:id", name: "place", component: place },

  { path: "/place/create", name: "placeCreate", component: placeCreate },
  { path: "/place/edit/:id", name: "placeEdit", component: placeEdit },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
