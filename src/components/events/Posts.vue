<template>
  <div>
    <div class="text-center">
      <h1>All events in game</h1>
      <p>Browse for all events</p>

      <div v-if="characters.length === 0">
        <h2>No events found at the moment</h2>
      </div>
    </div>
    <router-link
      :to="{ name: 'eventCreate' }"
      class="btn btn-sm btn-outline-primary"
      >Add events
    </router-link>
    <div class="row">
      <div
        class="col-md-4"
        v-for="character in characters"
        :key="character._id"
      >
        <div class="card mb-4 shadow-sm">
          <img :src="character.iconLink" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">{{ character.type }}</p>
            <router-link
              :to="{ name: 'event', params: { id: character._id } }"
              class="btn btn-sm btn-outline-secondary"
              >View events
            </router-link>
            <router-link
              :to="{ name: 'eventEdit', params: { id: character._id } }"
              class="btn btn-sm btn-outline-warning"
              >Edit events
            </router-link>
            <button
              class="btn btn-sm btn-outline-danger"
              v-on:click="deletePost(character._id)"
            >
              Delete events
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
      characters: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`http://localhost:3100/events`)
        .then(data => (this.characters = data.data));
    },
    deletePost(id) {
      axios.delete(`http://localhost:3100/events/${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>
