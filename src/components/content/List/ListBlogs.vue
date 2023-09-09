<template>
  <ul class="divide-y-1 dark:divide-white">
    <li v-for="blog in blogs" :key="blog.id" class="hoverable-invert px-4 py-6">
      <a :href="`/blog/${blog.slug}`" class="projects flex">
        <div class="w-4/5 flex flex-col">
          <h3 class="text-3xl font-medium flex items-center space-x-2">
            <LanguageTag>
              {{ blog.language }}
            </LanguageTag>
            <span>{{ blog.title }}</span>
          </h3>
          <p class="mt-3 flex-1 dark:text-slate-500">
            {{ blog.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <BlogTag v-for="tag in blog.tags" :key="tag" :label="tag" />
          </div>
          <div class="mt-5 justify-self-end flex space-x-4">
            <div class="dark:text-white dark:text-opacity-40">
              Published on {{ dayjs(blog.publishedDate).format('DD MMM YYYY') }}
            </div>
            <div>{{ calculateReadingTime(blog.body) }} min read</div>
          </div>
        </div>
        <img
          class="w-1/5 object-cover rounded-md"
          :src="blog.imageSrc"
          :alt="blog.imageAlt"
        />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import LanguageTag from '../../LanguageTag.vue';
import BlogTag from '../../BlogTag.vue';
import type { BlogPostComponentProps } from '../../../../@types';

defineProps<{
  blogs: BlogPostComponentProps[];
}>();

const calculateReadingTime = (body: string) => {
  const wordCount = body.split(/\s+/gm).length;
  const WPM = 238;
  return Math.ceil(wordCount / WPM);
};
</script>
