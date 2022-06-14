

<template>
  <div>
       <div class="col-md-12 form-wrapper">
         <h2> Create Place </h2>
         <form id="create-post-form" @submit.prevent="createPost">
              <div class="form-group col-md-12">
               <label for="name"> name </label>
               <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name">
              </div>
            <div class="form-group col-md-12">
                 <label for="type"> type </label>
                 <input type="text" id="type" v-model="type" name="type" class="form-control">
             </div>
            <div class="form-group col-md-12">
                 <label for="details"> details </label>
                 <input type="text" id="details" v-model="details" name="details" class="form-control">
             </div>
             <div class="form-group col-md-12">
                 <label for="imageLink"> imageLink </label>
                 <input type="text" id="imageLink" v-model="imageLink" name="imageLink" class="form-control">
             </div>

             <div class="form-group col-md-4 pull-right">
                 <button class="btn btn-success" type="submit"> Create Post </button>
             </div>          
         </form>
       </div>
   </div>
</template>

<script lang="js">
import axios from "axios";
import router from "../../router";
export default {
 data() {
   return {
     title: "",
     description: "",
     body: "",
     author: "",
     date_posted: ""
   };
 },
 created() {
   this.date_posted = new Date().toLocaleDateString();
 },
 methods: {
   createPost() {
     let postData = {
       title: this.title,
       description: this.description,
       body: this.body,
       author: this.author,
       date_posted: this.date_posted
     };
     this.__submitToServer(postData);
   },
   __submitToServer(data) {
     axios.post('http://localhost:3100/places', data).then(data => {
       router.push({ name: "home" });
     });
   }
 }
};
</script>

