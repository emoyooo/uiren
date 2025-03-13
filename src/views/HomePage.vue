<template>
  <div class="homePage">
    <div class="homepage_container">
      <HomePageHeader @search="updateSearchFilters" />
      <HomePageMain :searchFilters="searchFilters" />
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
  data() {
    return {
      searchFilters: {
        category: "",
        location: "",
      },
    };
  },
  methods: {
    updateSearchFilters(filters) {
      this.searchFilters = filters;
    },
  },
};
</script>

<style scoped>
.nav-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.nav-tab {
  margin: 0 15px;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}
.nav-tab.active-tab {
  border-color: #0177e4;
}
</style>
