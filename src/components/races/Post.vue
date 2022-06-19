<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px">
        <small
          ><button class="btn btn-success" v-on:click="navigate()">
            View all races
          </button></small
        >
      </h4>
      <hr />
      <img :src="race.iconLink" class="card-img-top" />
      <h1>{{ race.name }}</h1>
      <h2>{{ race.description }}</h2>
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
      race: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get(`http://localhost:3100/races/${this.id}`)
        .then((data) => (this.race = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
