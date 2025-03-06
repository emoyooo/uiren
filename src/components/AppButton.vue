<template>
  <button>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: () => "Click",
    },
  },
};
</script>
