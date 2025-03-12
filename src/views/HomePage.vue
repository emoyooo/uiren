<template>
  <div class="home_page">
    <div class="top_section" :style="{ backgroundImage: `url('/images/uirenhomepage.jpg')` }">
      <div class="homepage_container">
        <HomePageHeader />
        <HomePageMain />
      </div>
    </div>
    <div class="bottom_section">
      <!-- Empty section without any image -->
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import HomePageMain from "@/components/HomePageMain.vue";
export default {
  name: "HomePage",
  components: {
    HomePageHeader,
    HomePageMain,
  },
};
</script>

<style scoped>
.home_page {
  background-color: rgb(73, 4, 57);
  color: rgb(62, 17, 17);
}
.top_section {
  background-size: cover;
  background-position: center;
  color: white;
}
.bottom_section {
  background-color: black; /* Ensure the bottom section is empty without any image */
  height: 100vh; /* Adjust height as needed */
}
h1 {
  color: white;
}
.search-bar {
  background-color: #333;
  color: white;
}
.search-button {
  background-color: #555;
  color: white;
}
.categories-button {
  background-color: #444;
  color: white;
}
.get-started-button {
  background-color: #007bff;
  color: white;
}
/* Adjust other styles as needed to match the new aesthetic */
</style>
