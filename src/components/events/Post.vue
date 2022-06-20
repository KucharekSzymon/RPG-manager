<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all events
          </button></small>
      </h4>
      <hr />
      <h1>{{ event.name }}</h1>
      <h2>{{ event.description }}</h2>
      <br><h2>Locations</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in event.locations" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
      <br><h2>Events</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in event.events" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
      <br><h2>Characters</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in event.characters" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
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
      event: {},
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
        .then((data) => (this.event = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
