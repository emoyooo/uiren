<template>
  <div class="publication_container lined">
    <div class="media_container">
      <component
        :is="mediaTag"
        :src="mediaSrc"
        v-if="mediaSrc"
        class="video"
        controls
      ></component>
    </div>
    <div class="description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaSrc: String,
    description: String,
  },
  computed: {
    mediaTag() {
      return this.mediaSrc.endsWith(".mp4") ? "video" : "img";
    },
  },
};
</script>

<style>
.description {
  margin: 10px 20px 20px 20px;
}
.media_container img,
.media_container video {
  max-width: 100%;
  max-width: 100%;
  object-fit: contain;

  border-radius: 30px 30px 0 0;
}
.publication_container {
  width: 50%;
  margin: 50px auto;
}
.video {
  max-width: 500px;
  max-width: 100%;
  object-fit: contain;
  display: block;
}
</style>
