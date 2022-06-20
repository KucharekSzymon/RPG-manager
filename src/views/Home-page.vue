<template>
  <div class="Home-page">
    <h1>Home Page</h1>
  </div>
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