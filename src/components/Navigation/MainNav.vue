<template>
  <header :class="[headerHeigthClass, 'w-full']">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Amine Careers</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a :href="menuItem.url" class="flex items-center h-full py-2.5">
                {{ menuItem.text }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex ml-auto items-center">
          <image-profile
            v-if="isLoggedIn"
            data-test="profile-image"
          ></image-profile>
          <action-button
            v-else
            @click="userLogin"
            data-test="login-button"
            type="primary"
          ></action-button>
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="sub-nav"></sub-nav>
    </div>
  </header>
</template>
<script setup>
import { computed, ref } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ImageProfile from "@/components/Navigation/ImageProfile.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
const menuItems = ref([
  { text: "Teams", url: "/" },
  { text: "Locations", url: "/" },
  { text: "Life at Boob Corp", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
]);
const isLoggedIn = ref(false);
const userLogin = () => {
  isLoggedIn.value = true;
};
const headerHeigthClass = computed(() => {
  return [isLoggedIn.value ? "h-32" : "h-16"];
});
</script>
