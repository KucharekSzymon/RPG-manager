<template>
  <div>
    <h4 style="margin-top: 30px">
      <small
        ><button class="btn btn-success" v-on:click="navigate()">
          View all races
        </button></small
      >
    </h4>

    <div class="col-md-12 form-wrapper">
      <h2>Update race</h2>
      <form id="create-post-form" @submit.prevent="editPlace">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input
            type="text"
            id="name"
            v-model="race.name"
            name="name"
            class="form-control"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="type"> description </label>
          <input
            type="text"
            id="type"
            v-model="race.description"
            name="type"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="details"> icon link </label>
          <input
            type="text"
            id="details"
            v-model="race.iconLink"
            name="details"
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
      race: {},
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const race = await axios.get(`http://localhost:3100/races/${this.id}`);
    this.race = race.data;
  },
  methods: {
    editPlace() {
      let raceData = {
        name: this.race.name,
        description: this.race.description,
        iconLink: this.race.iconLink,
      };

      axios
        .patch(`http://localhost:3100/races/${this.id}`, raceData)
        .then(() => {
          router.push({ name: "Home" }).catch((err) => {
            alert(err.response.data.message);
          });
        });
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>

<style scoped></style>
