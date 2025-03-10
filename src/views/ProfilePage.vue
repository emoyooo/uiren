<template>
  <header>
    <div
      class="profile_background"
      :style="{ backgroundImage: `url(${backgroundURL})` }"
    ></div>
    <div class="container profile_container">
      <div class="profile_mainInfo lined">
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
      </div>
      <div class="bio font_larger">
        <div class="bio_text lined padding">
          <p>{{ bio }}</p>
        </div>
        <div class="contacts lined padding">
          <div>
            <b>Whatsapp:</b> <span>{{ whatsapp }}</span>
          </div>
          <div>
            <b>Telegram:</b> <span>{{ telegram }}</span>
          </div>
          <div>
            <b>Email:</b> <span>{{ email }}</span>
          </div>
          <div>
            <b>Instagram:</b> <span>{{ instagram }}</span>
          </div>
        </div>
        <div class="column_flex">
          <div class="address lined padding" style="position: relative">
            <div>
              <b>Address:</b> <span>{{ address }}</span>
              <router-link
                to="/map"
                style="
                  display: block;
                  position: absolute;
                  bottom: -20px;
                  left: 180px;
                "
                >View in map</router-link
              >
            </div>
          </div>
          <div class="education lined padding">
            <div>
              <b>Education:</b> <span>{{ education }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="profile_page">
        <div class="publications">
          <Publication
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :description="post.description"
            :mediaSrc="post.mediaSrc"
          />
        </div>
        <div class="reviews lined padding"></div>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
import Publication from "@/components/Publication.vue";
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          mediaSrc: "/public/images/publication.jpg",
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          mediaSrc: "C:\Users\dinam\Downloads\Uiren\public\images\vid.mp4",
        },
      ],
    };
  },
  setup() {
    const route = useRoute();
    return {
      userId: route.params.id,
    };
  },
  props: {
    address: {
      type: String,
      default: "Abylai Han Koshesi, 1",
    },
    education: {
      type: String,
      default: "Suleiman Demirel University",
    },
    whatsapp: {
      type: String,
      default: " https://wa.me/+7472376750",
    },
    telegram: {
      type: String,
      default: " https://t.me/katsuuud",
    },
    instagram: {
      type: String,
      default: " https://www.instagram.com/katsuuud?igsh=NzJ2bjY3czNjemxn",
    },
    email: {
      type: String,
      default: "240118013@sdu.edu.kz",
    },
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
    bio: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque veritatis asperiores veniam est minus nisi neque ex, dolores maiores fugit voluptatum impedit quaerat ipsum distinctio similique sit tenetur libero.",
    },
  },
  components: {
    Publication,
  },
};
</script>

<style scoped>
.font_larger {
  font-size: 16px;
}

h1 {
  font-weight: 600;
  line-height: 30px;
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
  position: relative;
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
  margin: 0 490px 0 50px;
}
.button_container {
  padding: 10px 40px;
}
a {
  color: #0177e4;
  text-decoration: underline;
}

.profile_container {
  display: flex;
  flex-direction: column;
}
.bio {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  column-gap: 15px;
}
b {
  font-weight: 600;
}
.contacts span {
  color: rgb(49, 49, 49);
}
.padding {
  padding: 20px;
}
.bio .column_flex * {
  width: 100%;
  height: 50%;
  font-size: 18px;
}
</style>
