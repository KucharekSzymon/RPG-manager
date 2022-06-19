<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small
          ><button class="btn btn-success" v-on:click="navigate()">
            View all items
          </button></small
        >
      </h4>
      <h2>Create item</h2>
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
          <label for="quantity"> quantity </label>
          <input
            type="number"
            min="0"
            id="quantity"
            v-model="quantity"
            name="quantity"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="weight"> weight </label>
          <input
            type="number"
            min="0"
            id="weight"
            v-model="weight"
            name="weight"
            class="form-control"
          />
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
          <label for="location"> location </label>
          <select v-model="places" name="location" id="location" multiple>
            <option
              v-for="loc in location"
              :key="loc._id"
              v-bind:value="loc._id"
            >
              {{ loc.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create item</button>
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
     quantity: '',
     weight: '',
     location: [],
     places: [],
     type: "",
     imageLink: "",
   };
 },
  async created() {
   const locations =  await axios.get('http://localhost:3100/places');
   this.location = locations.data;
  },
  methods: {
   createPost() {
     let itemData = {
       name: this.name,
       quantity: String(this.quantity),
       weight: String(this.weight),
       location: this.places,
       type: this.type,
       iconLink: this.imageLink,
     };
     this.__submitToServer(itemData);
   },
   navigate(){
     router.push("/items");
   },
   __submitToServer(data) {
     axios.post('http://localhost:3100/items', data).then(data => {
       router.push("/items");
     }).catch(err => {
       alert(err.response.data.message);
     });
   }
 }
};
</script>
