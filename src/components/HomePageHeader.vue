<template>
  <header>
    <div class="container">
      <div class="header_content">
        <h1 v-html="headerTitle"></h1>
        <p>{{ headerText }}</p>
        <HeaderSearch @search="updateSearchQuery" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearch from "./HeaderSearch.vue";

export default {
  data() {
    return {
      headerTitle: "Get Skill<br>Share Skill",
      headerText:
        "Uiren is a peer-to-peer skill-sharing platform that helps you find experts and mentors in your local area. Whether you want to learn a new skill or share your expertise, Uiren connects you with passionate individuals nearby.",
      searchQuery: '',
    };
  },
  components: {
    HeaderSearch,
  },
  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query;
      this.$emit('search', query);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/public/images/pexels-pixabay-33597.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  z-index: -1;
}
.header_content {
  display: flex;
  margin-right: auto;
  padding: 200px 0 150px;
  width: 50%;
  flex-direction: column;
  row-gap: 30px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: normal;
}
</style>