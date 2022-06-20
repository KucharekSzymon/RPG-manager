<template>
  <div>
    <div class="text-center">
      <h1>All campaigns in game</h1>
      <p>Browse for all campaigns</p>

      <div v-if="campaigns.length === 0">
        <h2>No items found at the moment</h2>
      </div>
    </div>
    <router-link
      :to="{ name: 'campaignCreate' }"
      class="btn btn-sm btn-outline-primary"
      >Add campaign
    </router-link>
    <div class="row">
      <div
        class="col-md-4"
        v-for="campaign in campaigns"
        :key="campaign._id"
      >
        <div class="card mb-4 shadow-sm">
          <img :src="campaign.imageLink" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ campaign.name }}</h5>
            <p class="card-text">{{ campaign.type }}</p>
            <router-link
              :to="{ name: 'campaign', params: { id: campaign._id } }"
              class="btn btn-sm btn-outline-secondary"
              >View campaign
            </router-link>
            <router-link
              :to="{ name: 'campaignEdit', params: { id: campaign._id } }"
              class="btn btn-sm btn-outline-warning"
              >Edit campaign
            </router-link>
            <button
              class="btn btn-sm btn-outline-danger"
              v-on:click="deletePost(campaign._id)"
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
      campaigns: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`http://localhost:3100/campaigns`)
        .then(data => (this.campaigns = data.data));
    },
    deletePost(id) {
      axios.delete(`http://localhost:3100/campaigns/${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>
