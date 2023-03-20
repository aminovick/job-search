<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1">1 colum</div>
        <div class="col-span-5 col-start-2">
          <TheHeadLine></TheHeadLine>
          <JobSearchForm></JobSearchForm>
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="h-80 w-88 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-span-1 col-start-12">5 columns</div>
      </div>
    </section>
  </main>
</template>
<script setup>
import TheHeadLine from "@/components/JobSearch/TheHeadLine.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
</script>
