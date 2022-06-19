<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all Events
          </button></small>
      </h4>
      <h2>Create Event</h2>
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name" />
        </div>
        <div class="form-group col-md-12">
          <label for="type"> type </label>
          <select id="type" v-model="type" name="type" class="form-control">
            <option value="positive">positive</option>
            <option value="negative">negative</option>
            <option value="neutral">neutral</option>

          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input class="form-control" type="text" v-model="description" id="description" />
        </div>
        <div class="form-group col-md-12">
          <label for="iconLink"> iconLink </label>
          <input class="form-control" type="text" v-model="iconLink" id="iconLink" />
        </div>

        <div class="form-group col-md-12">
          <label for="locations"> locations </label>
          <select v-model="charLoc" class="form-control" name="location" id="locations" multiple>
            <option v-for="i in locations" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="characters"> characters </label>
          <select v-model="charChar" class="form-control" name="location" id="characters" multiple>
            <option v-for="i in characters" :key="i._id" v-bind:value="i._id">
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
      type: '',
      description: '',
      iconLink: '',
      locations: [],
      charLoc: [],
      characters: [],
      charChar: [],
    };
  },
  async created() {
    const locations = await axios.get('http://localhost:3100/places');
    this.locations = locations.data;

    const characters = await axios.get('http://localhost:3100/characters');
    this.characters = characters.data;
  },
  methods: {
    createPost() {
      let characterData = {
        name: this.name,
        type: this.type,
        locations: this.charLoc,
        characters: this.charChar,
        description: this.description,
        iconLink: this.iconLink,
      };
      this.__submitToServer(characterData);
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
