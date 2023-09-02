<template>
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
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData('blogs', () =>
  queryContent('blogs')
    .where({
      _path: route.path,
    })
    .findOne(),
);

useHead({
  meta: [
    { name: 'author', content: 'Oyster Lee' },
    { name: 'robots', content: 'index, nofollow' },
    { name: 'og:url', content: `https://oysterlee.dev${route.path}` },
    { name: 'og:site_name', content: 'Oyster Lee' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@OysteRD3' },
    { name: 'twitter:creator', content: '@OysteRD3' },
    { name: 'twitter:url', content: `https://oysterlee.dev${route.path}` },
    ...(data.value
      ? [
          { name: 'og:title', content: data.value.title },
          { name: 'og:description', content: data.value.description },
          { name: 'twitter:title', content: data.value.title },
          { name: 'twitter:description', content: data.value.description },
          { name: 'og:type', content: data.value.list ? 'website' : 'article' },
          ...(data.value.image?.src
            ? [
                { name: 'og:image', content: data.value.image.src },
                { name: 'twitter:image', content: data.value.image.src },
              ]
            : []),
        ]
      : []),
  ],
});
</script>
