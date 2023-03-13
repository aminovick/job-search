<template>
  <section>
    <h1
      class="mb-14 text-8xl font-bold traking-tighter"
      data-test="action-phrase"
    >
      <span :class="actionClass">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo corp</h2>
  </section>
</template>
<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import nextElementList from "@/utils/NextElementInList";
const action = ref("Build");
const inetrval = ref(null);
const changeAction = () => {
  inetrval.value = setInterval(() => {
    const actions = ["Build", "Create", "Design", "Code"];
    action.value = nextElementList(actions, action.value);
  }, 3000);
};
const actionClass = computed(() => {
  return {
    [action.value.toLowerCase()]: true,
  };
});
onBeforeMount(() => {
  clearInterval(inetrval.value);
});
onMounted(() => {
  changeAction();
});
</script>
<style scoped>
.build {
  color: blue;
}
.create {
  color: blueviolet;
}
.design {
  color: rgb(12, 241, 31);
}
.code {
  color: crimson;
}
</style>
