<template>
  <ul class="divide-y-1 dark:divide-white">
    <li
      v-for="blog in data"
      :key="blog._path"
      class="hoverable-invert px-4 py-6"
    >
      <NuxtLink :to="blog._path" class="projects flex">
        <div class="w-4/5 flex flex-col">
          <h3 class="text-3xl font-medium">
            {{ blog.title }}
          </h3>
          <p class="mt-3 flex-1 dark:text-slate-500">
            {{ blog.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <BlogTag
              v-for="tag in getBlogTags(blog.head.meta)"
              :key="tag"
              :label="tag"
            />
          </div>
          <div class="mt-5 justify-self-end flex space-x-4">
            <div class="dark:text-white dark:text-opacity-40">
              Published on {{ getPublishedDate(blog.head.meta) }}
            </div>
            <div>{{ blog.readingTime }} min read</div>
          </div>
        </div>
        <img
          class="w-1/5 object-cover rounded-md"
          :src="blog.image.src"
          :alt="blog.image.alt"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const { data } = useAsyncData('page-data', () =>
  queryContent('blogs')
    .where({
      _path: {
        $ne: '/blogs',
      },
    })
    .find(),
);
</script>
