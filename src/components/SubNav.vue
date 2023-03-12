<template>
  <div class="h-12 w-full border-b border-solid border-brand-gray-1">
    <div class="h-full flex items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3">
        </font-awesome-icon>
        <span
          ><span class="text-brand-green-1" data-test="job-count">12345</span>
          Jobs matched</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const onJobResultsPage = ref(true);
</script>
