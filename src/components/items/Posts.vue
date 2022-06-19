<template>
  <div>
    <div class="text-center">
      <h1>All items in game</h1>
      <p>Browse for all items</p>

      <div v-if="items.length === 0">
        <h2>No items found at the moment</h2>
      </div>
    </div>
    <router-link
      :to="{ name: 'itemCreate' }"
      class="btn btn-sm btn-outline-primary"
      >Add item
    </router-link>
    <div class="row">
      <div class="col-md-4" v-for="item in items" :key="item._id">
        <div class="card mb-4 shadow-sm">
          <img :src="item.imageLink" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.type }}</p>
            <router-link
              :to="{ name: 'item', params: { id: item._id } }"
              class="btn btn-sm btn-outline-secondary"
              >View item
            </router-link>
            <router-link
              :to="{ name: 'itemEdit', params: { id: item._id } }"
              class="btn btn-sm btn-outline-warning"
              >Edit race
            </router-link>
            <button
              class="btn btn-sm btn-outline-danger"
              v-on:click="deletePost(item._id)"
            >
              Delete race
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`http://localhost:3100/items`)
        .then(data => (this.items = data.data));
    },
    deletePost(id) {
      axios.delete(`http://localhost:3100/items/${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>
