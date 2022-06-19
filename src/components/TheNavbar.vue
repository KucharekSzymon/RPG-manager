<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">RPG Master</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link">
            <router-link to="/">Home</router-link><span class="sr-only"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/places">Places</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/races">Races</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/items">Items</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/characters">Characters</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/events">Events</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
            <span v-if="isLoggedIn">Witaj {{ userName }}</span>
          </a>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" role="button" @click="userLogout"> Wyloguj </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapGetters(["userName"]),
  },
  methods: {
    ...mapMutations(["logOut"]),
    userLogout() {
      this.logOut();
      console.log(this.isLoggedIn);
    },
  },
};
</script>
