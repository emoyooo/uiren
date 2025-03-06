<template>
  <div class="card">
    <div class="card_ownerFull">
      <div class="pfp">
        <img :src="imageURL" alt="" />
      </div>
      <div class="card_owner">
        <h2>{{ name }}</h2>
        <div class="skill_category">
          <h3>{{ skillCategory }}</h3>
        </div>
      </div>
    </div>
    <div class="caption">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageURL: String,
    name: String,
    skillCategory: String,
    text: String,
  },
};
</script>

<style>
.pfp img {
  width: 60px;
  height: 60px;
  border-radius: 50px;
}
.pfp {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
}
.card {
  color: black;
  padding: 20px 30px;
  border-radius: 30px;
  box-shadow: 1px 1px 5px #b6b6b6;
}
.card_owner h2 {
  font-weight: 500;
}
.filled_text {
  padding: 2px 15px;
  background-color: #0177e4;
  color: white;
  width: fit-content;
  border-radius: 20px;
}
.card_ownerFull {
  display: flex;
  align-items: flex-start;
  column-gap: 20px;
}
.caption {
  margin-top: 20px;
}
</style>
