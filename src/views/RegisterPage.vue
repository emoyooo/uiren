<template>
  <div class="container register_page">
    <h1>Registration</h1>
    <div class="flex">
      <div class="column_flex">
        <div class="register_image"></div>
        <router-link to="/creatorRegister" class="button_link">
          <div class="button_container">I'm a tutor</div>
        </router-link>
      </div>
      <div class="column_flex">
        <div class="register_image"></div>
        <router-link to="/userRegister" class="button_link">
          <div class="button_container">I want to get skill</div>
        </router-link>
      </div>
    </div>

    <!-- 🔥 Interest test button -->
    <div class="test-container">
      <p>Don't know your interests?</p>
      <router-link to="/skill-test" class="test-button">
        Take a test and find out! 🚀
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.register_page {
  margin-top: 150px;
  width: 50%;
  text-align: center;
}
.register_image {
  width: 300px;
  height: 300px;
  background-color: aqua;
}
.register_page .flex {
  margin: 30px 0;
  justify-content: space-between;
}
.register_page h1 {
  font-weight: 600;
}
.register_page .column_flex {
  row-gap: 30px;
}

/* 🔥 Test Section Styles */
.test-container {
  margin-top: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  display: inline-block;
  text-align: center;
}

/* ✨ Test Button Styles */
.test-button {
  display: inline-block;
  padding: 12px 20px;
  margin-top: 10px;
  background: linear-gradient(45deg, #ff758c, #ff7eb3);
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.test-button:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #ff5f7e, #ff89b3);
}
</style>
