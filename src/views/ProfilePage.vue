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
          <div class="flex">
            <div class="filled_text">
              <h3>{{ skillCategory }}</h3>
            </div>
            <span>/</span>
            <div class="filled_text">
              <h3>{{ location }}</h3>
            </div>
          </div>
        </div>
        <div class="button_container">Enroll</div>
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
      default: "Absolute",
    },
    location: {
      type: String,
      default: "Arkalyk, Kazakhstan",
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  column-gap: 5px;
}
.flex .filled_text {
  text-wrap: nowrap;
}
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
  position: absolute;
  top: -50px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 30px 50px;
}
.container {
  position: relative;
}
.infotext {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 0 460px 0 70px;
}
.button_container {
  padding: 10px 40px;
}
</style>
