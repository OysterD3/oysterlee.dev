<template>
  <ContentDoc v-slot="{ doc: data }">
    <article
      :class="{
        'md-body': $route.path !== '/blogs',
      }"
    >
      <template v-if="data && !data.list">
        <div class="space-y-4">
          <div class="flex space-x-4">
            <div class="dark:text-white dark:text-opacity-40">
              Published on {{ getPublishedDate(data.head.meta) }}
            </div>
            <div>{{ data.readingTime }} min read</div>
          </div>
          <div class="flex flex-wrap gap-4">
            <BlogTag
              v-for="tag in getBlogTags(data.head.meta)"
              :key="tag"
              :label="tag"
            ></BlogTag>
          </div>
          <h1>
            {{ data.display ?? data.title }}
          </h1>
        </div>
        <div
          v-if="
            data.description &&
            $route.path.startsWith('/blogs') &&
            !$route.path.endsWith('blogs')
          "
          class="dark:text-gray-500 text-2xl"
        >
          {{ data.description }}
        </div>
      </template>
      <ContentRenderer :value="data" />
    </article>
  </ContentDoc>
</template>

<script setup lang="ts">
useHead({
  meta: [{ name: 'author', content: 'Oyster Lee' }],
});
</script>
