<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px">
        <small><button class="btn btn-success" v-on:click="navigate()">
            View all items
          </button></small>
      </h4>
      <hr />
      <img :src="item.imageLink" class="card-img-top" />
      <h1>{{ item.name }}</h1>
      <h2>Qty: {{ item.quantity }}</h2>
      <h2>Weight: {{ item.weight }}</h2>

      <br>
      <h2>Locations</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="i in item.location" :key="i._id" v-bind:value="i._id"> {{ i.name }}</li>
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
      item: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get(`http://localhost:3100/items/${this.id}`)
        .then((data) => (this.item = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
