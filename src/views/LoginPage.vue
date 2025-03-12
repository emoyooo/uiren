<template>
  <div class="container login_page">
    <h1>Login</h1>
    <div class="login_register_container lined">
      <form @submit.prevent="login">
        <label>
          Email:
          <input type="email" v-model="email" required />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <button class="button_container submition" type="submit">Submit</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { loginUser } from "../services/authService";
import { fetchUserProfile } from "../services/userService";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        console.log("Attempting to log in with", this.email, this.password); // Debug log
        const user = await loginUser(this.email, this.password);
        console.log("Login successful", user); // Debug log
        const userProfile = await fetchUserProfile(user.uid); // Fetch user profile
        console.log("Fetched user profile:", userProfile); // Debug log
        this.$store.commit('setUserProfile', userProfile); // Store user profile in Vuex
        this.$router.push("/"); // Redirect to homepage
      } catch (error) {
        console.error("Login error:", error); // Debug log
        this.errorMessage = error.response?.data?.message || error.message; // Improved error handling
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: black;
  color: white;
}
h1 {
  color: white;
}
label {
  color: white;
}
input {
  background-color: #333;
  color: white;
}
button {
  background-color: #555;
  color: white;
}
.error {
  color: red;
}
/* Adjust other styles as needed to match the new aesthetic */
</style>
