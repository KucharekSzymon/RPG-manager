<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small
          ><button class="btn btn-success" v-on:click="navigate()">
            View all races
          </button></small
        >
      </h4>
      <h2>Create races</h2>
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
          <label for="description"> description </label>
          <input
            type="text"
            id="description"
            v-model="description"
            name="description"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="imageLink"> Icon link </label>
          <input
            type="text"
            id="imageLink"
            v-model="iconLink"
            name="imageLink"
            class="form-control"
          />
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create race</button>
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
     description: "",
     iconLink: "",
   };
 },
 methods: {
   createPost() {
     let raceData = {
       name: this.name,
       description: this.description,
       iconLink: this.iconLink,
     };
     this.__submitToServer(raceData);
   },
   navigate(){
     router.push("/races");
   },
   __submitToServer(data) {
     axios.post('http://localhost:3100/races', data).then(data => {
       router.push("/races").catch(err => {
         alert(err.response.data.message);
       });
     });
   }
 }
};
</script>
