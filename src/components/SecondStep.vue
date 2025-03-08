<template>
  <div class="steps_identificate">
    <div class="identificator"></div>
    <div class="identificator active"></div>
  </div>
  <div class="login_register_container lined">
    <form @submit.prevent="submitForm">
      <label>
        Birthday:
        <input
          type="date"
          name="birthday"
          id="birthay"
          v-model="FormData.birthday"
          required
        />
      </label>
      <div class="gender flex">
        Gender:
        <div class="radios">
          <label>
            <input
              type="radio"
              value="Female"
              v-model="FormData.gender"
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="Male"
              v-model="FormData.gender"
              required
            />
            Male
          </label>
        </div>
      </div>
      <label>
        Country:
        <input
          type="text"
          name="country"
          id="country"
          v-model="FormData.country"
          required
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          id="city"
          v-model="FormData.city"
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          id="address"
          v-model="FormData.address"
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          id="number"
          v-model="FormData.number"
          required
        />
      </label>
      <label>
        Telegram:
        <input
          type="url"
          name="telegram"
          id="telegram"
          v-model="FormData.telegram"
        />
      </label>
      <label>
        Whatsapp:
        <input
          type="url"
          name="whatsapp"
          id="whatsapp"
          v-model="FormData.whatsapp"
        />
      </label>
      <label>
        Instagram:
        <input
          type="url"
          name="instagram"
          id="instagram"
          v-model="FormData.instagram"
        />
      </label>
      <label>
        Education:
        <input type="text" name="edu" id="edu" v-model="FormData.edu" />
      </label>
      <label>
        Your Skill:
        <input type="text" name="skill" id="skill" v-model="FormData.skill" />
      </label>
      <div class="flex">
        <label>
          Price(hour):
          <input
            type="text"
            name="priceh"
            id="priceh"
            v-model="FormData.priceh"
            required
          />
        </label>
        <label>
          Price(month):
          <input
            type="text"
            name="pricem"
            id="pricem"
            v-model="FormData.pricem"
            required
          />
        </label>
      </div>
      <div class="flex buttons">
        <button
          class="button_container submition"
          type="submit"
          @click="$emit('switch', 'one')"
        >
          Go Back
        </button>
        <button
          class="button_container submition"
          type="submit"
          @click="$emit('switch', 'two')"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FormData: {
        birthday: "",
        gender: "",
        country: "",
        city: "",
        address: "",
        number: "",
        telegram: "",
        whatsapp: "",
        edu: "",
        skill: "",
        priceh: "",
        pricem: "",
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Data submitted:", this.FormData);
      this.submitted = true;
    },
  },
};
</script>

<style>
.gender {
  font-weight: 600;
  column-gap: 60px;
}
.radios {
  display: flex;
  column-gap: 30px;
}
.buttons {
  justify-content: space-between;
}
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
</style>
