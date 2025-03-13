<template>
  <div class="test-container">
    <h2>Discover Your Hobby</h2>

    <div v-if="!result">
      <div v-for="(question, index) in questions" :key="index" class="question">
        <h3>{{ question.text }}</h3>
        <div>
          <label v-for="(option, i) in question.options" :key="i">
            <input
              type="radio"
              :name="'question' + index"
              :value="option"
              v-model="answers[index]"
            />
            {{ option }}
          </label>
        </div>
      </div>

      <button @click="submitTest" class="submit-btn">Get Hobby</button>
    </div>

    <div v-if="result" class="result">
      <h3>Your Recommended Hobby:</h3>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          text: "What do you enjoy doing in your free time?",
          options: ["Reading", "Sports", "Gaming", "Crafting"],
        },
        {
          text: "Do you prefer indoor or outdoor activities?",
          options: ["Indoor", "Outdoor"],
        },
        {
          text: "What excites you the most?",
          options: [
            "Learning new things",
            "Physical challenges",
            "Creative work",
            "Relaxing",
          ],
        },
        {
          text: "How do you like to socialize?",
          options: ["With a small group", "In large crowds", "Online", "Alone"],
        },
        {
          text: "What type of challenges do you enjoy?",
          options: [
            "Strategic thinking",
            "Physical endurance",
            "Creative expression",
            "None",
          ],
        },
      ],
      answers: [],
      result: null,
    };
  },
  methods: {
    submitTest() {
      const answerKey = {
        Reading: "Writing or Book Club",
        Sports: "Hiking or Gym",
        Gaming: "Esports or Game Development",
        Crafting: "DIY Projects or Painting",
        Indoor: "Board Games or Cooking",
        Outdoor: "Cycling or Camping",
        "Learning new things": "Coding or Chess",
        "Physical challenges": "Running or Martial Arts",
        "Creative work": "Music or Painting",
        Relaxing: "Yoga or Meditation",
      };

      for (let answer of this.answers) {
        if (answerKey[answer]) {
          this.result = answerKey[answer];
          return;
        }
      }
      this.result = "Try exploring new hobbies!";
    },
  },
};
</script>

<style scoped>
.test-container {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  width: 80%;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.question {
  margin-bottom: 20px;
}
label {
  display: block;
  margin: 5px 0;
}
.submit-btn {
  background: #ff758c;
  padding: 12px 20px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}
.result {
  font-size: 1.2rem;
  color: white;
  margin-top: 20px;
}
</style>
