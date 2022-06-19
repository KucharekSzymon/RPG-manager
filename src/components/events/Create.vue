<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small
          ><button class="btn btn-success" v-on:click="navigate()">
            View all Events
          </button></small
        >
      </h4>
      <h2>Create Event</h2>
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input
            type="text"
            id="name"
            v-model="name"
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
            v-model="type"
            name="type"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="character"> characters </label>
          <select v-model="charChar" name="character" id="characters">
            <option v-for="r in characters" :key="r._id" v-bind:value="r._id">
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
            v-model="age"
            name="age"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="sex"> sex </label>
          <select v-model="sex" id="sex">
            <option>M</option>
            <option>F</option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="imageLink"> Image link </label>
          <input
            type="text"
            id="imageLink"
            v-model="imageLink"
            name="imageLink"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="alive"> alive </label>
          <input type="checkbox" v-model="alive" id="alive" />
        </div>
        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input type="text" v-model="description" id="description" />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">
            Create character
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
     characters: [],
     location: [],
     charChar: [],
     charLoc: '',
     iconLink: "",
   };
 },
  async created() {
   const locations =  await axios.get('http://localhost:3100/places');
   this.location = locations.data;
   const characters = await axios.get('http://localhost:3100/characters');
   this.characters = characters.data;
  },
  methods: {
   createPost() {
     let eventData = {
       name: this.name,
       type: this.type,
       character: this.charChar,
       location: this.charLoc,
       description: this.description,
       iconLink: this.iconLink
     };
     this.__submitToServer(eventData);
   },
   navigate(){
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
