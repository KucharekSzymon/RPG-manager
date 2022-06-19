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
          <label for="description"> description </label>
          <input class="form-control" type="text" v-model="description" id="description" />
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
          <label for="imageLink"> Image link </label>
          <input
            type="text"
            id="imageLink"
            v-model="imageLink"
            name="imageLink"
            class="form-control"
          />
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
     age: '',
     type: '',
     locations: [],
     charLoc: [],
     imageLink: "",
   };
 },
  async created() {

   const locations = await axios.get('http://localhost:3100/places');
   this.locations = locations.data;
  },
  methods: {
   createPost() {
     let characterData = {
       name: this.name,
       type: this.type,
       locations: this.charLoc,
       description: this.description,
       iconLink: this.imageLink
     };
     this.__submitToServer(characterData);
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
