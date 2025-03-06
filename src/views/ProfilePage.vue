<template>
  <header>
    <div
      class="profile_background"
      :style="{ backgroundImage: `url(${backgroundURL})` }"
    >
      <div>
        <h1>Profile</h1>
        <p>ID: {{ userId }}</p>
      </div>
    </div>
    <div class="container">
      <div class="profile_mainInfo">
        <div class="pfp">
          <img :src="ImageURL" alt="" />
        </div>
        <div class="infotext">
          <h1>{{ name }}</h1>
          <div class="skill_category">
            <h3>{{ skillCategory }}</h3>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    return {
      userId: route.params.id,
    };
  },
  props: {
    backgroundURL: {
      type: String,
      default: "/images/default-background-image.png",
    },
    ImageURL: {
      type: String,
      default: "/images/pfp.png",
    },
    name: {
      type: String,
      default: "Nagito Komaeda",
    },
    skillCategory: {
      type: String,
      default: "Some Category",
    },
  },
};
</script>

<style scoped>
.profile_background {
  height: 300px;
  background-size: cover;
  background-position: center;
}
.profile_mainInfo img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}
.profile_mainInfo {
  display: flex;
  column-gap: 70px;
  position: absolute;
  top: 250px;

  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 30px 50px;
}
.infotext {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
