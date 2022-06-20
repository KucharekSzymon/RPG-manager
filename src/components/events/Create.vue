<template>event
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
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name" />
        </div>


 <div class="form-group col-md-12">
          <label for="type"> type </label>
          <select id="type" v-model="type" name="type" class="form-control">
            <option value="positive">positive</option>
            <option value="neutral">neutral</option>
            <option value="negative">negative</option>

          </select>
        </div>

        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input type="text" id="description" v-model="description" name="description" class="form-control"
            placeholder="Enter description" />
        </div>

        <div class="form-group col-md-12">
          <label for="characters"> characters </label>
          <select class="form-control" v-model="charChar" name="characters" id="characters" multiple>
            <option v-for="i in characters" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-12">
          <label for="locations"> locations </label>
          <select class="form-control" v-model="charLoc" name="locations" id="locations" multiple>
            <option v-for="i in locations" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">
            Create event
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="js">
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      name: "",
      description: '',
      type: '',
      characters: [],
      charChar: [],
      locations: [],
      charLoc: [],
    };
  },
  async created() {
    const characters = await axios.get('http://localhost:3100/characters');
    this.characters = characters.data;

    const locations = await axios.get('http://localhost:3100/places');
    this.locations = locations.data;
  },
  methods: {
    createPost() {
      let eventData = {
        name: this.name,
        type: this.type,
        description: this.description,
        characters: this.charLoc,
        locations: this.charLoc,
      };
      this.__submitToServer(eventData);
    },
    navigate() {
      router.push("/events");
    },
    __submitToServer(data) {
      axios.post('http://localhost:3100/events', data).then(data => {
        router.push("/events");
      }).catch(err => {
        alert(err.response.data.message);
      });
    }
  }
};
</script>
