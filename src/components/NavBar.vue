<template>
  <nav class="w-full bg-transparent">
    <div class="max-w-7xl py-6 flex justify-between items-center">
      <a href="/" class="-my-6">
        <img
          :src="isDark ? '/dark-logo-64.png' : '/light-logo-64.png'"
          alt="Oyster Lee"
        />
      </a>
      <ul class="flex gap-4">
        <li
          v-for="nav in NAVIGATIONS"
          :key="nav.title"
          class="p-2 dark:text-white opacity-70 hover:opacity-100 ease-in-out duration-200"
        >
          <a :href="nav.to"> {{ nav.title }} </a>
        </li>
        <li
          class="p-2 cursor-pointer dark:text-white opacity-70 hover:opacity-100 ease-in-out duration-200"
          @click="toggleDark()"
        >
          <div
            :class="{
              'h-6 w-6': true,
              'i-heroicons-moon': !isDark,
              'i-heroicons-sun': isDark,
            }"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDark, useFavicon, usePreferredDark, useToggle } from '@vueuse/core';

const NAVIGATIONS = [
  {
    title: 'Blogs',
    to: '/blogs',
  },
  {
    title: 'CV',
    to: '/cv',
  },
] as const;

const isDark = useDark({
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: usePreferredDark() ? 'dark' : 'light',
});
const toggleDark = useToggle(isDark);

const favicon = computed(() =>
  isDark.value ? '/dark-logo-64.png' : '/light-logo-64.png',
);

useFavicon(favicon);
</script>
