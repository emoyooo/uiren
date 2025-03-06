<template>
  <main class="container">
    <div class="cards">
      <CreatorsCard
        v-for="creator in creators"
        :key="creator.id"
        :imageURL="creator.imageURL"
        :name="creator.name"
        :skillCategory="creator.skillCategory"
        :text="creator.text"
      />
    </div>
  </main>
</template>

<script>
import CreatorsCard from "@/components/CreatorsCard.vue";

export default {
  components: {
    CreatorsCard,
  },
  data() {
    return {
      creators: [
        {
          id: 1,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Alice",
          skillCategory: "Web Developer",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, officiis debitis iste iure error quas soluta reiciendis architecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
        {
          id: 2,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Bob",
          skillCategory: "Graphic Designer",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, officiis debitis iste iure error quas soluta reiciendis architecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
        {
          id: 2,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Bob",
          skillCategory: "Graphic Designer",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, officiis debitis iste iure error quas soluta reiciendis architecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
        {
          id: 3,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Bob",
          skillCategory: "Graphic Designer",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, officiis debitis iste iure error quas soluta reiciendis architecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
        {
          id: 4,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Boooob",
          skillCategory: "Graphic Designer",
          text: "Lorem ipsum dolor sit amet consectetur aecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
        {
          id: 5,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Bob",
          skillCategory: "Graphic Designer",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, officiis debitis iste iure error quas soluta reiciendis architecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
        {
          id: 4,
          imageURL: "/public/images/pfp.png", // Правильный путь
          name: "Boooob",
          skillCategory: "Graphic Designer",
          text: "Lorem ipsum dolor sit amet consectetur aecto fugiat. Tempora temporibus minus nemo at nam enim odit, reprehenderit quod!",
        },
      ],
    };
  },
};
</script>

<style>
main {
  padding: 70px 0;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 равных колонки */
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
}
</style>
