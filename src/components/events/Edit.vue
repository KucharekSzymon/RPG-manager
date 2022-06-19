<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all events
          </button></small>
      </h4>
      <h2>Create event</h2>
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input type="text" id="name" v-model="event.name" name="name" class="form-control" placeholder="Enter name" />
        </div>
        <div class="form-group col-md-12">
          <label for="type"> type </label>
          <select id="type" v-model="event.type" name="type" class="form-control">
            <option value="positive">positive</option>
            <option value="negative">negative</option>
            <option value="neutral">neutral</option>
          </select>
        </div>

        <div class="form-group col-md-12">
          <label for="locations"> locations </label>
          <select v-model="charLoc" name="location" id="locations" multiple>
            <option v-for="i in locations" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input type="text" v-model="event.description" id="description" />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit event</button>
        </div>
      </form>
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
      locations: [],
      charLoc: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const event = await axios.get(
      `http://localhost:3100/events/${this.id}`
    );
    this.event = event.data;

    const locations = await axios.get("http://localhost:3100/places");
    this.locations = locations.data;

  },
  methods: {
    editPlace() {
      let eventData = {
        name: this.event.name,
        type: this.event.type,
        locations: this.charLoc,
        description: this.event.description,
      };

      axios
        .patch(`http://localhost:3100/events/${this.id}`, eventData)
        .then(() => {
          router.push("/events");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>
