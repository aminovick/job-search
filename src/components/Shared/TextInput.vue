<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :value="props.modelValue"
    @input="updateValue($event.target.value)"
  />
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>
