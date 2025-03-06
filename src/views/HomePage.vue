<template>
  <div class="homePage">
    <div class="homepage_container">
      <HomePageHeader />
      <HomePageMain />
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import HomePageMain from "@/components/HomePageMain.vue";
export default {
  components: {
    HomePageHeader,
    HomePageMain,
  },
};
</script>

<style></style>
