<template>
  <div class="container register_page">
    <h1>Register</h1>
    <div class="register_container lined">
      <form @submit.prevent="register">
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
import { registerUser } from "../services/authService";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async register() {
      try {
        console.log("Attempting to register with", this.email, this.password); // Debug log
        const user = await registerUser(this.email, this.password);
        console.log("Registration successful", user); // Debug log
        this.$router.push("/login"); // Redirect to login page
      } catch (error) {
        console.error("Registration error:", error); // Debug log
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
