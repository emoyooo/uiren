<template>
  <header>
    <div class="container">
      <div class="header_content">
        <h1 v-html="headerTitle"></h1>
        <p>{{ headerText }}</p>
        <HeaderSearch />
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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus consequatur magni, reiciendis quis, vero debitis sint exercitationem, eum sapiente at assumenda voluptatibus aspernatur illo necessitatibus eos ad incidunt quaerat vel?",
    };
  },
  components: {
    HeaderSearch,
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
