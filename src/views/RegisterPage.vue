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
  </div>
</template>

<style>
.register_page {
  margin-top: 150px;
  width: 50%;
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
</style>
