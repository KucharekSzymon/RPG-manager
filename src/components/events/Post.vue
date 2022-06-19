<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px">
        <small
          ><button class="btn btn-success" v-on:click="navigate()">
            View all characters
          </button></small
        >
      </h4>
      <hr />
      <img :src="character.imageLink" class="card-img-top" />
      <h1>{{ character.name }}</h1>
      <h2>{{ character.type }}</h2>
      <h2>{{ character.race["name"] }}</h2>
      <h2>{{ character.location.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      character: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get(`http://localhost:3100/events/${this.id}`)
        .then((data) => (this.character = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
