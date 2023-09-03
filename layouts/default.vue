<template>
  <div class="max-w-7xl flex flex-col px-8 mx-auto h-screen">
    <nav class="w-full dark:bg-slate-950">
      <div class="max-w-7xl py-6">
        <ul class="flex gap-4 justify-end">
          <li
            v-for="nav in NAVIGATIONS"
            :key="nav.title"
            class="p-2 dark:text-white opacity-70 hover:opacity-100 ease-in-out duration-200"
          >
            <NuxtLink :to="nav.to"> {{ nav.title }} </NuxtLink>
          </li>
          <li class="py-2 px-4 cursor-pointer" @click="toggleDark()">
            <div class="i-heroicons-moon h-6 w-6 text-gray-500" />
          </li>
        </ul>
      </div>
    </nav>
    <main class="dark:text-slate-300 py-6 flex-1">
      <slot />
    </main>
    <footer class="flex justify-between py-6">
      <div></div>
      <ul class="mt-4 flex space-x-lg flex-wrap items-center">
        <li
          v-for="link in SOCIAL_MEDIA_LINKS"
          :key="link.icon"
          class="cursor-pointer dark:text-white opacity-50 hover:opacity-100 ease-in-out duration-200"
        >
          <a :href="link.link" target="_blank">
            <div :class="['text-2xl', link.icon]"></div>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
const NAVIGATIONS = [
  {
    title: 'Blogs',
    to: '/blogs',
  },
  {
    title: 'Experiences',
    to: '/experiences',
  },
] as const;

const SOCIAL_MEDIA_LINKS = [
  {
    icon: 'i-ri:twitter-x-fill',
    link: 'https://x.com/OysteRD3',
  },
  {
    icon: 'i-ri:github-fill',
    link: 'https://github.com/OysterD3',
  },
  {
    icon: 'i-ri:stack-overflow-fill',
    link: 'https://stackoverflow.com/users/6820538/oysterd3',
  },
  {
    icon: 'i-ri:medium-fill',
    link: 'https://blog.oysterlee.dev/',
  },
  {
    icon: 'i-ri:linkedin-box-fill',
    link: 'https://www.linkedin.com/in/oysterlee/',
  },
];

const isDark = useDark({
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: usePreferredDark() ? 'dark' : 'light',
});
const toggleDark = useToggle(isDark);
</script>
