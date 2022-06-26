<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import type { HeadAttrs } from "@vueuse/head";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { formatDate } from "../utils";

const props = defineProps<{
  frontmatter: Record<string, string>;
}>();

const route = useRoute();

const meta = reactive<HeadAttrs[]>([
  {
    property: "og:url",
    content: route.fullPath,
  },
  {
    property: "og:image",
    content:
      "https://oysterlee,dev/" + props.frontmatter.image ||
      "https://oysterlee.dev/logo.png",
  },
  {
    name: "twitter:title",
    content: props.frontmatter.title,
  },
  {
    name: "twitter:image",
    content:
      "https://oysterlee,dev/" + props.frontmatter.image ||
      "https://oysterlee.dev/logo.png",
  },
  {
    name: "twitter:description",
    content: props.frontmatter.description,
  },
]);
useHead({
  title: props.frontmatter.title || "🇲🇾 Oyster Lee",
  meta,
});
</script>

<template>
  <div class="overflow-y-auto min-h-screen max-h-screen">
    <NavBar />
    <main>
      <div class="container">
        <div
          v-if="frontmatter.publishDate"
          class="dark:text-white dark:text-opacity-50 text-gray-600 mb-5"
        >
          Published on {{ formatDate(frontmatter.publishDate) }}
        </div>
        <div
          v-if="frontmatter.tags && frontmatter.tags.length > 0"
          class="flex flex-wrap gap-4 mb-5"
        >
          <RouterLink
            v-for="tag in frontmatter.tags"
            :key="tag"
            class="bg-gray-300 rounded-full px-3 py-1 block hover:bg-gray-100"
            :to="`/blogs?tag=${tag}`"
          >
            {{ tag }}
          </RouterLink>
        </div>
        <h1>
          {{ frontmatter.display ?? frontmatter.title }}
        </h1>
        <div
          v-if="
            frontmatter.description &&
            route.path.startsWith('/blogs') &&
            !route.path.endsWith('blogs')
          "
          class="dark:text-gray-500 text-2xl -mt-8"
        >
          {{ frontmatter.description }}
        </div>
        <div v-if="frontmatter.gallery && frontmatter.gallery.length > 0">
          <Carousel>
            <Slide v-for="img in frontmatter.gallery" :key="img">
              <img :src="img" />
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <article>
          <slot />
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
