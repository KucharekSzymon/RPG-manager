<template>
  <div style="margin: 50px 20% 20%">
    <span style="text-align: center; color: red" v-if="error != ''">
      {{ error }}
    </span>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="js">

import { mapMutations } from "vuex";
import axios from "axios";
export default {
  data: () => {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3100/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      if (response.status != 201) {
        this.error = "Login lub hasło są nieprawidłowe"
        console.log(await response.json())
        return;
      }
      const { access_token, user } = await response.json();
      this.setToken(access_token);
      this.setUser(user);
      this.$router.push("/");
    },

  },
};
</script>
