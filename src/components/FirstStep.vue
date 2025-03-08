<template>
  <div class="steps_identificate">
    <div class="identificator active"></div>
    <div class="identificator"></div>
  </div>
  <div class="login_register_container lined">
    <form @submit.prevent="submitForm">
      <label>
        Email:
        <input
          type="email"
          name="email"
          id="email"
          v-model="FormData.email"
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          id="password"
          v-model="FormData.password"
          required
        />
      </label>
      <button
        class="button_container submition h"
        type="submit"
        @click="$emit('switch', 'two')"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FormData: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Отправленные данные:", this.FormData);
      this.submitted = true;
    },
  },
};
</script>

<style>
.steps_identificate {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  margin-top: 10px;
}
.identificator {
  width: 47%;
  height: 5px;
  background-color: #b9b9b9;
}
.active {
  background-color: #0177e4;
}
.login_register_container {
  height: fit-content;
  border-radius: 30px;
  margin-top: 20px;
  padding: 40px;
  font-size: 16px;
}
.login_register_container form {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.login_register_container label {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-weight: 600;
}
.login_register_container input {
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #b9b9b9;
}
.login_register_container input:focus {
  border: 2px solid #0177e4;
}
.submition {
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
}
.h {
  margin-left: auto;
}
</style>
