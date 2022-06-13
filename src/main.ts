import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    logOut(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    userName(state) {
      return state.user;
    },
  },
});

createApp(App).use(router).use(store).mount("#xDXD");
