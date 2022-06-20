<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all campaigns
          </button></small>
      </h4>
      <h2>Create campaign</h2>
      <form id="create-post-form" @submit.prevent="editPlace">
        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input type="text" id="name" v-model="campaign.name" name="name" class="form-control"
            placeholder="Enter name" />
        </div>
        <div class="form-group col-md-12">
          <label for="owner"> owner </label>
          <input type="text" id="owner" v-model="campaign.owner" name="owner" class="form-control" />
        </div>


        <div class="form-group col-md-12">
          <label for="items"> items </label>
          <select class="form-control" v-model="charItems" name="location" id="items" multiple>
            <option v-for="i in items" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-12">
          <label for="events"> events </label>
          <select class="form-control" v-model="charChars" name="location" id="events" multiple>
            <option v-for="i in events" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="characters"> characters </label>
          <select class="form-control" v-model="charEvents" name="location" id="characters" multiple>
            <option v-for="i in characters" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
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
          <input type="text" id="imageLink" v-model="campaign.imageLink" name="imageLink" class="form-control" />
        </div>

        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input class="form-control" type="text" v-model="campaign.description" id="description" />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit campaign</button>
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
      campaign: {},
      items: [],
      charItems: [],
      events: [],
      charEvents: [],
      locations: [],
      charLoc: [],
      charChars: [],
      characters: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const campaign = await axios.get(
      `http://localhost:3100/campaigns/${this.id}`
    );
    this.campaign = campaign.data;

    const items = await axios.get("http://localhost:3100/items");
    this.items = items.data;

    const events = await axios.get("http://localhost:3100/events");
    this.events = events.data;

    const locations = await axios.get("http://localhost:3100/places");
    this.locations = locations.data;

    const characters = await axios.get("http://localhost:3100/characters");
    this.characters = characters.data;

  },
  methods: {
    editPlace() {
      const places = [];
      for (let l in location) {
        places.push(l._id);
      }
      let campaignData = {
        name: this.campaign.name,
        owner: this.campaign.owner,
        description: this.campaign.description,
        items: this.charItems,
        events: this.charEvents,
        locations: this.charLoc,
        characters: this.charChars,
        imageLink: this.campaign.imageLink,
      };

      axios
        .patch(`http://localhost:3100/campaigns/${this.id}`, campaignData)
        .then(() => {
          router.push("/campaigns");
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
