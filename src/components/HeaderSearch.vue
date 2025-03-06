<template>
  <div class="search_container">
    <div class="search_category">
      <a>Categories</a>
    </div>
    <div class="search_location">
      <a>Location</a>
    </div>
    <div class="search_button">
      <router-link to="/">Search</router-link>
    </div>
  </div>
</template>

<style scoped>
.search_container {
  display: flex;
  background-color: white;
  height: 30px;
  align-items: center;
  padding: 30px 5px;
  border-radius: 15px;
  width: fit-content;
}
a {
  color: #000000;
}
.search_button {
  background-color: #0177e4;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 15px;
}
.search_location {
  display: flex;
  align-items: center;
  border-left: 1px solid #b4b4b4;
  height: 40px;
}
.search_location,
.search_category {
  padding: 0 30px;
}
.search_button a {
  color: white;
}
</style>
