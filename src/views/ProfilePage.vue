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
          <div class="price">
            <span>{{ priceHour }} / {{ priceMonth }}</span>
          </div>
        </div>
        <div class="column_flex">
          <div class="button_container">Enroll</div>
          <router-link to="/">View in map</router-link>
        </div>
      </div>
    </div>
  </header>
  <div class="profile_page">
    <h1>Profile</h1>
    <div v-if="userProfile">
      <p><strong>Name:</strong> {{ userProfile.name }}</p>
      <p><strong>Email:</strong> {{ userProfile.email }}</p>
      <!-- Add more profile fields as needed -->
    </div>
    <div v-else>
      <p>Loading profile...</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapState } from "vuex";

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
    priceHour: {
      type: String,
      default: "2000₸",
    },
    priceMonth: {
      type: String,
      default: "40000₸",
    },
  },
  computed: {
    ...mapState(['userProfile']),
  },
};
</script>

<style scoped>
h1 {
  font-weight: 600;
  line-height: 30px;
  color: white;
}
.filled_text {
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
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 30px 50px;
  border: 3px solid rgb(113, 113, 113);
}
.container {
  position: relative;
}
.infotext {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 0 420px 0 50px;
  color: white;
}
.button_container {
  padding: 10px 40px;
  background-color: #555;
  color: white;
}
a {
  color: #0177e4;
  text-decoration: underline;
}
</style>
