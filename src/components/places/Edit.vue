<template>
  <div>
    <h4 style="margin-top: 30px;"><small><button class="btn btn-success" v-on:click="navigate()"> View All Posts </button></small></h4>

    <div class="col-md-12 form-wrapper">
      <h2>Update place</h2>
      <form id="create-post-form" @submit.prevent="editPlace">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input
            type="text"
            id="name"
            v-model="place.name"
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
            v-model="place.type"
            name="type"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="details"> details </label>
          <input
            type="text"
            id="details"
            v-model="place.details"
            name="details"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="imageLink"> imageLink </label>
          <input
            type="text"
            id="imageLink"
            v-model="place.imageLink"
            name="imageLink"
            class="form-control"
          />
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit place</button>
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
      place: {},
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const place = await axios.get(`http://localhost:3100/places/${this.id}`);
    this.place = place.data;
  },
  methods: {
    editPlace() {
      let placeData = {
        name: this.place.name,
        type: this.place.type,
        details: this.place.details,
        imageLink: this.place.imageLink,
      };

      axios
        .patch(`http://localhost:3100/places/${this.id}`, placeData)
        .then((data) => {
          router.push({ name: "Home" });
        });
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>

<style scoped></style>
