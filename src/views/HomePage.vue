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
