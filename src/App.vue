<template>
  <div id="app">
    <Navbar />
    <router-view @user-logged-in="handleUserLogin"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  methods: {
    handleUserLogin(userId) {
      this.$refs.navbar.login(userId);
    },
  },
};
</script>

<style></style>