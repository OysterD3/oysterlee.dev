<template>
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
</template>

<script setup lang="ts">
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
</script>
