<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <TheNavbar />

  <router-view></router-view>
</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3100/items`);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
