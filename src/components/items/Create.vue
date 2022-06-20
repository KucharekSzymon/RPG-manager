<template>item
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all items
          </button></small>
      </h4>
      <h2>Create item</h2>
      <form id="create-post-form" @submit.prevent="createPost">

        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name" />
        </div>

        <div class="form-group col-md-12">
          <label for="type"> type </label>
          <input type="text" id="type" v-model="type" name="type" class="form-control" placeholder="Enter type" />
        </div>

        <div class="form-group col-md-12">
          <label for="quantity"> quantity </label>
          <input type="text" id="quantity" v-model="quantity" name="quantity" class="form-control" />
        </div>

        <div class="form-group col-md-12">
          <label for="imageLink"> imageLink </label>
          <input type="text" id="imageLink" v-model="imageLink" name="imageLink" class="form-control" />
        </div>
        <div class="form-group col-md-12">
          <label for="weight"> weight </label>
          <input type="text" id="weight" v-model="weight" name="weight" class="form-control" />
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
            Create item
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
      type: "",
      quantity: "",
      weight: "",
      imageLink: "",

      locations: [],
      charLoc: [],
      description: '',
    };
  },
  async created() {
    const locations = await axios.get('http://localhost:3100/places');
    this.locations = locations.data;
  },
  methods: {
    createPost() {
      let itemData = {
        name: this.name,
        type: this.type,
        quantity: this.quantity,
        weight: this.weight,
        imageLink: this.imageLink,

        location: this.charLoc,
      };
      this.__submitToServer(itemData);
    },
    navigate() {
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
