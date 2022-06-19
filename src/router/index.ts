import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-page.vue";
import Login from "@/views/Login-page.vue";
import place from "@/components/places/Post.vue";
import placeCreate from "@/components/places/Create.vue";
import placeEdit from "@/components/places/Edit.vue";
import placeHome from "@/components/places/Posts.vue";
//rasy
import raceHome from "@/components/races/Posts.vue";
import race from "@/components/races/Post.vue";
import raceCreate from "@/components/races/Create.vue";
import raceEdit from "@/components/races/Edit.vue";
//items
import itemHome from "@/components/items/Posts.vue";
import item from "@/components/items/Post.vue";
import itemCreate from "@/components/items/Create.vue";
import itemEdit from "@/components/items/Edit.vue";
//chars
import characterHome from "@/components/characters/Posts.vue";
import character from "@/components/characters/Post.vue";
import characterCreate from "@/components/characters/Create.vue";
import characterEdit from "@/components/characters/Edit.vue";
//events
import eventHome from "@/components/events/Posts.vue";
import event from "@/components/events/Post.vue";
import eventCreate from "@/components/events/Create.vue";
import eventEdit from "@/components/events/Edit.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },

  //places
  { path: "/places", name: "placeHome", component: placeHome },
  { path: "/place/:id", name: "place", component: place },

  { path: "/place/create", name: "placeCreate", component: placeCreate },
  { path: "/place/edit/:id", name: "placeEdit", component: placeEdit },

  //races
  { path: "/races", name: "raceHome", component: raceHome },
  { path: "/race/:id", name: "race", component: race },

  { path: "/race/create", name: "raceCreate", component: raceCreate },
  { path: "/race/edit/:id", name: "raceEdit", component: raceEdit },

  //items
  { path: "/items", name: "itemHome", component: itemHome },
  { path: "/item/:id", name: "item", component: item },

  { path: "/item/create", name: "itemCreate", component: itemCreate },
  { path: "/item/edit/:id", name: "itemEdit", component: itemEdit },

  //chars
  { path: "/characters", name: "characterHome", component: characterHome },
  { path: "/character/:id", name: "character", component: character },

  {
    path: "/character/create",
    name: "characterCreate",
    component: characterCreate,
  },
  {
    path: "/character/edit/:id",
    name: "characterEdit",
    component: characterEdit,
  },

  //events
  { path: "/events", name: "eventHome", component: eventHome },
  { path: "/events/:id", name: "event", component: event },

  {
    path: "/events/create",
    name: "eventCreate",
    component: eventCreate,
  },
  {
    path: "/events/edit/:id",
    name: "eventEdit",
    component: eventEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
