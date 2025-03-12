<template>
  <div class="container map_page">
    <h2>View in map</h2>
    <h1 style="font-weight: 600">{{ country }}, {{ city }}, {{ address }}</h1>
    <div class="map_container lined">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.253414086618!2d76.6679728303334!3d43.20847672535121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38834f7675d8a6c3%3A0x7b7d14aec270c056!2sSDU%20University!5e0!3m2!1sru!2skz!4v1741610547756!5m2!1sru!2skz"
        width="100%"
        height="500"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    address: {
      type: String,
      default: "Abylai Han Koshesi, 1",
    },
    city: {
      type: String,
      default: "Qaskelen",
    },
    country: {
      type: String,
      default: "Kazakhstan",
    },
  },
};
</script>

<style>
.map_page {
  margin-top: 120px;
}
.map_container {
  overflow: hidden;
  height: fit-content;
  padding: 0;
}
</style>
