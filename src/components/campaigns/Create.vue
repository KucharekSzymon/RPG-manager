<template>campaign
  <div>
    <div class="col-md-12 form-wrapper">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all campaigns
          </button></small>
      </h4>
      <h2>Create campaign</h2>
      <form id="create-post-form" @submit.prevent="createPost">

        <div class="form-group col-md-12">
          <label for="name"> name </label>
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name" />
        </div>


        <div class="form-group col-md-12">
          <label for="items"> items </label>
          <select class="form-control" v-model="charItems" name="items" id="items" multiple>
            <option v-for="i in items" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="characters"> characters </label>
          <select class="form-control" v-model="charChars" name="characters" id="characters" multiple>
            <option v-for="i in characters" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="events"> events </label>
          <select class="form-control" v-model="charEvents" name="events" id="events" multiple>
            <option v-for="i in events" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="locations"> locations </label>
          <select class="form-control" v-model="charLoc" name="locations" id="locations" multiple>
            <option v-for="i in locations" :key="i._id" v-bind:value="i._id">
              {{ i.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-12">
          <label for="imageLink"> Image link </label>
          <input type="text" id="imageLink" v-model="imageLink" name="imageLink" class="form-control" />
        </div>
        <div class="form-group col-md-12">
          <label for="description"> description </label>
          <input class="form-control" type="text" v-model="description" id="description" />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">
            Create campaign
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="js">
import axios from "axios";
import router from "../../router";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapGetters(["userName"]),
  },

  data() {
    return {
      name: "",
      owner: "",
      userID: "",
      items: [],
      charItems: [],
      characters: [],
      charChars: [],
      events: [],
      users: [],
      charEvents: [],
      locations: [],
      charLoc: [],
      imageLink: "",
      description: '',
    };
  },
  async created() {
    const items = await axios.get('http://localhost:3100/items');
    this.items = items.data;

    const locations = await axios.get('http://localhost:3100/places');
    this.locations = locations.data;

    const characters = await axios.get('http://localhost:3100/characters');
    this.characters = characters.data;

    const events = await axios.get('http://localhost:3100/events');
    this.events = events.data;

    const users = await axios.get('http://localhost:3100/users');
    this.users = users.data;
    this.users.forEach(element => {
      if(element.name == this.userName)
    this.userID = element._id;
  });

},
methods: {
    ...mapMutations(["logOut"]),
    userLogout() {
    this.logOut();
    console.log(this.isLoggedIn);
  },
  createPost() {
    let campaignData = {
      name: this.name,
      items: this.charItems,
      owner: this.userID,
      characters: this.charChars,
      events: this.charEvents,
      locations: this.charLoc,
      description: this.description,
      imageLink: this.imageLink
    };
    this.__submitToServer(campaignData);
  },
  navigate() {
    router.push("/Campaigns");
  },
  __submitToServer(data) {
    axios.post('http://localhost:3100/campaigns', data).then(data => {
      router.push("/Campaigns");
    }).catch(err => {
      alert(err.response.data.message);
    });
  }
}
};
</script>
