<template>
  <div class="search_categories lined padding">
    <div class="flex">
      <div class="column_flex">
        <div class="theme">
          <b>Playing musical instruments</b>
          <span @click="selectCategory('Guitar')"><br />Guitar</span
          ><span @click="selectCategory('Piano')"
            ><br />
            Piano</span
          ><span @click="selectCategory('Dombyra')"
            ><br />
            Dombyra</span
          ><span @click="selectCategory('Electric guitar')"
            ><br />
            Electric guitar</span
          >
        </div>
        <div class="theme">
          <b>Technical & Digital</b>
          <span @click="selectCategory('Programming and software development')"
            ><br />
            Programming and software development</span
          ><span @click="selectCategory('Electronics and soldering')"
            ><br />
            Electronics and soldering</span
          ><span @click="selectCategory('Graphic design')"
            ><br />
            Graphic design</span
          ><span @click="selectCategory('Web development')"
            ><br />
            Web development</span
          ><span @click="selectCategory('Cybersecurity')"
            ><br />
            Cybersecurity</span
          >
        </div>
      </div>
      <div class="column_flex">
        <div class="theme">
          <b>Craft & Handiwork</b>
          <span @click="selectCategory('Knitting')"
            ><br />
            Knitting</span
          ><span @click="selectCategory('Pottery')"
            ><br />
            Pottery</span
          ><span @click="selectCategory('Cooking and baking')"
            ><br />
            Cooking and baking</span
          ><span @click="selectCategory('Jewelry making')"
            ><br />
            Jewelry making</span
          >
        </div>
        <div class="theme">
          <b>Art</b>
          <span @click="selectCategory('Singing')"
            ><br />
            Singing</span
          ><span @click="selectCategory('Drawing and painting')"
            ><br />
            Drawing and painting</span
          ><span @click="selectCategory('Photography')"
            ><br />
            Photography</span
          ><span @click="selectCategory('Dancing')"
            ><br />
            Dancing</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["category-selected"],
  methods: {
    selectCategory(category) {
      this.$emit("category-selected", category);
    },
  },
};
</script>

<style>
.search_categories {
  background-color: white;
  color: black;
  position: absolute;
  z-index: 2;
  bottom: 75px;
  left: 0;
  padding: 35px;
}
.search_categories .column_flex {
  row-gap: 10px;
  justify-items: start;
}
.search_categories .flex {
  column-gap: 40px;
}
.theme {
  width: 100%;
}
.search_categories span {
  color: rgb(60, 60, 60);
}
</style>
