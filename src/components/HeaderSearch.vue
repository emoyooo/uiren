<template>
  <div class="search_container">
    <div class="search_category">
      <a @click="isVisible = !isVisible">{{ selectedCategory }}</a>
      <SearchCat v-if="isVisible" @category-selected="updateCategory" />
    </div>
    <div class="search_location">
      <template v-if="isEditingLocation">
        <input
          v-model="location"
          @blur="saveLocation"
          @keyup.enter="saveLocation"
          ref="locationInput"
          type="text"
          class="location_input"
          placeholder="Enter location"
        />
      </template>
      <template v-else>
        <a @click="editLocation">{{ location || "Location" }}</a>
      </template>
    </div>
    <div class="search_button">
      <a @click="search">Search</a>
    </div>
  </div>
</template>

<script>
import SearchCat from "./SearchCat.vue";

export default {
  components: {
    SearchCat,
  },
  data() {
    return {
      isVisible: false,
      selectedCategory: "Categories",
      isEditingLocation: false,
      location: "",
    };
  },
  methods: {
    updateCategory(category) {
      this.selectedCategory = category;
      this.isVisible = false;
    },
    editLocation() {
      this.isEditingLocation = true;
      this.$nextTick(() => {
        this.$refs.locationInput.focus();
      });
    },
    saveLocation() {
      this.isEditingLocation = false;
    },
    search() {
      this.$emit("search", {
        category:
          this.selectedCategory !== "Categories" ? this.selectedCategory : "",
        location: this.location.trim(),
      });
    },
  },
};
</script>

<style scoped>
.search_container {
  display: flex;
  background-color: white;
  height: 30px;
  align-items: center;
  padding: 30px 5px;
  border-radius: 15px;
  width: fit-content;
  position: relative;
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
  text-wrap: nowrap;
}
.search_button a {
  color: white;
}
.location_input {
  width: 120px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
}
</style>
