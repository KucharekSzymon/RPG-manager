<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all items
          </button></small>
      </h4>
      <h2>Create item</h2>
      <form id="create-post-form" @submit.prevent="editPlace">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input type="text" id="name" v-model="item.name" name="name" class="form-control" placeholder="Enter name" />
        </div>
        <div class="form-group col-md-12">
          <label for="quantity"> quantity </label>
          <input type="text" id="quantity" v-model="item.quantity" name="quantity" class="form-control" />
        </div>

        <div class="form-group col-md-12">
          <label for="type"> type </label>
          <input type="text" id="type" v-model="item.type" name="type" class="form-control" />
        </div>

        <div class="form-group col-md-12">
          <label for="weight"> weight </label>
          <input type="text" id="weight" v-model="item.weight" name="weight" class="form-control" />
        </div>

        <div class="form-group col-md-12">
          <label for="locations"> locations </label>
          <select class="form-control" v-model="cahrLoc" name="location" id="locations" multiple>
            <option v-for="i in locations" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-12">
          <label for="imageLink"> Image link </label>
          <input type="text" id="imageLink" v-model="item.imageLink" name="imageLink" class="form-control" />
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit item</button>
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
      item: {},
      locations: [],
      charLoc: [],

    };
  },
  async created() {
    this.id = this.$route.params.id;
    const item = await axios.get(
      `http://localhost:3100/items/${this.id}`
    );
    this.item = item.data;

    const locations = await axios.get("http://localhost:3100/places");
    this.locations = locations.data;

  },
  methods: {
    editPlace() {
      const places = [];
      for (let l in location) {
        places.push(l._id);
      }
      let itemData = {
        name: this.item.name,
        owner: this.item.owner,
        quantity: this.item.quantity,
        weight: this.item.weight,
        type: this.item.type,
        locations: this.charLoc,
        imageLink: this.item.imageLink,
      };

      axios
        .patch(`http://localhost:3100/items/${this.id}`, itemData)
        .then(() => {
          router.push("/items");
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
