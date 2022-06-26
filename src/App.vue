<script setup lang="ts">
useHead({
  meta: [
    { property: "og:title", content: "🇲🇾 Oyster Lee" },
    { property: "og:image", content: "https://oysterlee.dev/logo.png" },
    { name: "description", content: "A Malaysian Full-Stack Web Developer." },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: "@OysteRD3" },
  ],
});
</script>

<template>
  <RouterView />
</template>
