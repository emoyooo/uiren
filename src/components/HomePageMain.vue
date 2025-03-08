<template>
  <main class="container">
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search creators by name, skill, or city..." />
    </div>
    <div class="cards">
      <CreatorsCard
        v-for="creator in filteredCreators"
        :key="creator.id"
        :imageURL="creator.imageURL"
        :name="creator.name"
        :skillCategory="creator.skillCategory"
        :text="creator.text"
        :city="creator.city"
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
  props: {
    initialSearchQuery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchQuery: this.initialSearchQuery,
      creators: [
        {
          id: 1,
          imageURL: "/public/images/1.jpg",
          name: "Vladimir",
          skillCategory: "Web Developer",
          text: "Professional guitarist with 10+ years of experience. Specializes in blues, rock, and classical guitar.",
          city: "Kaskelen",
        },
        {
          id: 2,
          imageURL: "/public/images/2.jpg",
          name: "Aigul",
          skillCategory: "Graphic Designer",
          text: "Expert in 3D modeling and animation. Works with Blender, Maya, and ZBrush to create stunning digital art.",
          city: "Almaty",
        },
        {
          id: 3,
          imageURL: "/public/images/3.jpg",
          name: "Marat",
          skillCategory: "Opera Singer",
          text: "Trained opera singer with performances in national and international theaters. Teaches vocal techniques and stage presence.",
          city: "Astana",
        },
        {
          id: 4,
          imageURL: "/public/images/9.jpg",
          name: "Dina",
          skillCategory: "Calligraphy Artist",
          text: "Passionate calligrapher specializing in modern and Arabic calligraphy. Teaches brush pen and ink techniques.",
          city: "Aktobe",
        },
        {
          id: 5,
          imageURL: "/public/images/3.jpg",
          name: "Serik",
          skillCategory: "Woodworker & Carpenter",
          text: "Creates handmade furniture and wood carvings. Offers classes in woodworking and DIY home projects.",
          city: "Almaty",
        },
        {
          id: 6,
          imageURL: "/public/images/8.jpg",
          name: "Sofia",
          skillCategory: "Ballet Instructor",
          text: "Professional ballerina with experience in classical and contemporary dance. Conducts private and group ballet lessons.",
          city: "Almaty",
        },
        {
          id: 7,
          imageURL: "/public/images/6.jpg",
          name: "Amir",
          skillCategory: "Full-Stack Developer",
          text: "Software engineer specializing in web development (React, Vue, Node.js). Helps beginners build projects from scratch.",
          city: "Shymkent",
        },
        {
          id: 8,
          imageURL: "/public/images/7.jpg",
          name: "Elena",
          skillCategory: "Painter & Illustrator",
          text: "Fine artist and illustrator skilled in acrylic, watercolor, and digital painting. Offers step-by-step art coaching.",
          city: "Astana",
        },
      ],
    };
  },
  computed: {
    filteredCreators() {
      return this.creators.filter(creator => {
        const query = this.searchQuery.toLowerCase();
        return (
          creator.name.toLowerCase().includes(query) ||
          creator.skillCategory.toLowerCase().includes(query) ||
          creator.city.toLowerCase().includes(query)
        );
      });
    },
  },
  watch: {
    initialSearchQuery(newQuery) {
      this.searchQuery = newQuery;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>