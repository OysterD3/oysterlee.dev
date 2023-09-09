<template>
  <figure class="flex flex-col justify-center items-center my-6">
    <img
      :src="`https://source.unsplash.com/${id}`"
      :alt="`Photo by ${authorName} on Unsplash`"
    />
    <figcaption
      class="text-sm dark:text-white mt-2 dark:text-opacity-60 text-gray-500"
    >
      Photo by
      <a target="_blank" :href="`https://unsplash.com/${authorUsername}`">
        {{ authorName }}
      </a>
      on
      <a target="_blank" :href="`https://unsplash.com/photos/${id}`">
        Unsplash
      </a>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  id: string;
  authorName: string;
  authorUsername: string;
}>();
</script>
