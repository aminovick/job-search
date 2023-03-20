<template>
  <button :class="buttonClass" @click="handelClick">Sign In</button>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "primary",
  },
});
const buttonClass = computed(() => {
  return {
    [props.type]: true,
  };
});
const handelClick = () => {
  console.log("clickMe!");
};
</script>
<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply rounded bg-brand-bleu-1  text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-bleu-1 hover:bg-brand-bleu-2 hover:text-white;
}
</style>
