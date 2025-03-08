<template>
  <div class="container login_page">
    <h1>Registration</h1>
    <div>
      <FirstStep v-if="currentComponent === 'one'" @switch="switchComponent" />
      <SecondStep v-if="currentComponent === 'two'" @switch="switchComponent" />
    </div>
  </div>
</template>

<script>
import FirstStep from "@/components/FirstStep.vue";
import SecondStep from "@/components/SecondStep.vue";
export default {
  data() {
    return {
      FormData: {
        email: "",
        password: "",
      },
      submitted: false,
      currentComponent: "one",
    };
  },
  methods: {
    submitForm() {
      console.log("Отправленные данные:", this.FormData);
      this.submitted = true;
    },
    switchComponent(component) {
      this.currentComponent = component;
    },
  },
  components: {
    FirstStep,
    SecondStep,
  },
};
</script>

<style>
.login_page h1 {
  font-weight: 600;
}
.login_page {
  margin-top: 120px;
  width: 30%;
}
</style>
