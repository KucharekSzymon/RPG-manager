<template>
  <div>
    <div class="text-center">
      <h1>All races in game</h1>
      <p>Browse for all races</p>

      <div v-if="races.length === 0">
        <h2>No races found at the moment</h2>
      </div>
    </div>
    <router-link
      :to="{ name: 'raceCreate' }"
      class="btn btn-sm btn-outline-primary"
      >Add race
    </router-link>
    <div class="row">
      <div class="col-md-4" v-for="race in races" :key="race._id">
        <div class="card mb-4 shadow-sm">
          <img :src="race.iconLink" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ race.name }}</h5>
            <p class="card-text">{{ race.description }}</p>
            <router-link
              :to="{ name: 'race', params: { id: race._id } }"
              class="btn btn-sm btn-outline-secondary"
              >View race
            </router-link>
            <router-link
              :to="{ name: 'raceEdit', params: { id: race._id } }"
              class="btn btn-sm btn-outline-warning"
              >Edit race
            </router-link>
            <button
              class="btn btn-sm btn-outline-danger"
              v-on:click="deletePost(race._id)"
            >
              Delete race
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
      races: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`http://localhost:3100/races`)
        .then(data => (this.races = data.data));
    },
    deletePost(id) {
      axios.delete(`http://localhost:3100/races/${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>
