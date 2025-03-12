<template>
  <nav>
    <div class="container nav_container">
      <div class="icon">
        <h1>UIREN</h1>
      </div>
      <div class="main_nav">
        <router-link to="/">Home</router-link>
        <a href="/categories">Categories</a>
        <router-link :to="{ name: 'Profile', params: { id: userId } }"
          >My profile</router-link
        >
      </div>
      <div class="nav_part">
        <router-link to="/login">Login</router-link>
        <router-link to="/register" class="button_link">
          <div class="button_container">Get Started</div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  data() {
    return {
      userId: 10, //!!!!!!!!!!!!
    };
  },
};
</script>

<style>
nav {
  position: fixed;
  width: 100%;
  padding: 20px;
  top: 0px;
  z-index: 10;
  background-image: linear-gradient(
    rgba(98, 98, 98, 0.755),
    rgba(110, 110, 110, 0)
  );
}
.nav_container {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_container a {
  color: #ffffff;
}

.button_container {
  width: fit-content;
  background-color: #0177e4;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  height: fit-content;
  font-weight: 500;
}

.main_nav {
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_part {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16%;
}
.icon {
  color: white;
  font-family: "Zen Dots", sans-serif;
}
</style>
