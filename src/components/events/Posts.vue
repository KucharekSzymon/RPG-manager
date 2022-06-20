<template>
  <div>
    <div class="text-center">
      <h1>All events in game</h1>
      <p>Browse for all events</p>

      <div v-if="events.length === 0">
        <h2>No items found at the moment</h2>
      </div>
    </div>
    <router-link
      :to="{ name: 'eventCreate' }"
      class="btn btn-sm btn-outline-primary"
      >Add event
    </router-link>
    <div class="row">
      <div
        class="col-md-4"
        v-for="event in events"
        :key="event._id"
      >
        <div class="card mb-4 shadow-sm">
          <img :src="event.imageLink" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text">{{ event.type }}</p>
            <router-link
              :to="{ name: 'event', params: { id: event._id } }"
              class="btn btn-sm btn-outline-secondary"
              >View event
            </router-link>
            <router-link
              :to="{ name: 'eventEdit', params: { id: event._id } }"
              class="btn btn-sm btn-outline-warning"
              >Edit event
            </router-link>
            <button
              class="btn btn-sm btn-outline-danger"
              v-on:click="deletePost(event._id)"
            >
              Delete event
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
      events: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`http://localhost:3100/events`)
        .then(data => (this.events = data.data));
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
