<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all campaigns
          </button></small>
      </h4>
      <hr />
      <img :src="campaign.imageLink" class="card-img-top" />
      <h1>{{ campaign.name }}</h1>
      <h2>{{ campaign.description }}</h2>
      <br><h2>Locations</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in campaign.locations" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
      <br><h2>Events</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in campaign.events" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
      <br><h2>Characters</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in campaign.characters" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
            <br><h2>Items</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in campaign.items" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
      </ul>
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
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get(`http://localhost:3100/campaigns/${this.id}`)
        .then((data) => (this.campaign = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
