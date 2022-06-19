<template>
    <div>
      <div class="text-center">
        <h1>All places in game</h1>
        <p>Browse for all places</p>

       <div v-if="posts.length === 0">
            <h2> No places found at the moment </h2>
        </div>
      </div>

        <div class="row">
           <div class="col-md-4" v-for="post in posts" :key="post._id">
              <div class="card mb-4 shadow-sm">

                <img :src="post.imageLink" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">{{post.name}}</h5>
                  <p class="card-text">{{post.details}}</p>
                  <!--<router-link :to="{name: 'Post', params: {id: post._id}}" class="btn btn-sm btn-outline-secondary">View Post </router-link>-->
                  <router-link :to="{name: 'placeEdit', params: {id: post._id}}" class="btn btn-sm btn-outline-warning">Edit Post </router-link> 
                  <button class="btn btn-sm btn-outline-danger" v-on:click="deletePost(post._id)">Delete Post</button>
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
      posts: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`http://localhost:3100/places`)
        .then(data => (this.posts = data.data));
    },
    deletePost(id) {
      axios.delete(`http://localhost:3100/places/${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>
