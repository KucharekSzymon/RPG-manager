<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small
          ><button class="btn btn-success" v-on:click="navigate()">
            View all characters
          </button></small
        >
      </h4>
      <h2>Create character</h2>
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input
            type="text"
            id="name"
            v-model="character.name"
            name="name"
            class="form-control"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="type"> type </label>
          <input
            type="text"
            id="type"
            v-model="character.type"
            name="type"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="race"> race </label>
          <select v-model="charRace" name="race" id="race">
            <option v-for="r in races" :key="r._id" v-bind:value="r._id">
              {{ r.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="location"> location </label>
          <select v-model="charLoc" name="location" id="location">
            <option
              v-for="loc in location"
              :key="loc._id"
              v-bind:value="loc._id"
            >
              {{ loc.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="items"> items </label>
          <select v-model="charItems" name="location" id="items" multiple>
            <option v-for="i in items" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="age"> age </label>
          <input
            type="number"
            min="0"
            id="age"
            v-model="character.age"
            name="age"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="sex"> sex </label>
          <select v-model="character.sex" id="sex">
            <option>M</option>
            <option>F</option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="imageLink"> Image link </label>
          <input
            type="text"
            id="imageLink"
            v-model="character.imageLink"
            name="imageLink"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="alive"> alive </label>
          <input type="checkbox" v-model="character.alive" id="alive" />
        </div>
        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input type="text" v-model="character.description" id="description" />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit character</button>
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
      character: {},
      locations: [],
      items: [],
      races: [],
      charItems: [],
      charLoc: "",
      charRace: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const character = await axios.get(
      `http://localhost:3100/characters/${this.id}`
    );
    this.character = character.data;
    const locations = await axios.get("http://localhost:3100/places");
    this.location = locations.data;
    const items = await axios.get("http://localhost:3100/items");
    this.items = items.data;
    const races = await axios.get("http://localhost:3100/races");
    this.races = races.data;
  },
  methods: {
    editPlace() {
      const places = [];
      for (let l in location) {
        places.push(l._id);
      }
      let characterData = {
        name: this.character.name,
        type: this.character.type,
        race: this.charRace,
        location: this.charLoc,
        items: this.charItems,
        description: this.character.description,
        alive: this.character.alive,
        sex: this.character.sex,
        age: this.character.age,
      };

      axios
        .patch(`http://localhost:3100/characters/${this.id}`, characterData)
        .then(() => {
          router.push("/characters");
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

<style scoped></style>
