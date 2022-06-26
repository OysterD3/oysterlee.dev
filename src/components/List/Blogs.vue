<script lang="ts" setup>
import dayjs from "dayjs";
import type { RouteRecordNormalized } from "vue-router";
import { formatDate } from "../../utils";

const router = useRouter();
const blogs: RouteRecordNormalized[] = router
  .getRoutes()
  .filter(
    (v) =>
      v.path !== "/blogs" &&
      v.path.startsWith("/blogs") &&
      !v.path.endsWith(".html"),
  )
  .sort((a, b) => {
    if (
      dayjs((a.meta.frontmatter as Record<string, string>).publishDate).isAfter(
        (a.meta.frontmatter as Record<string, string>).publishDate,
      )
    ) {
      return -1;
    }
    if (
      dayjs(
        (a.meta.frontmatter as Record<string, string>).publishDate,
      ).isBefore((a.meta.frontmatter as Record<string, string>).publishDate)
    ) {
      return 1;
    }
    return 0;
  });
</script>

<template>
  <div v-for="blog in blogs" :key="blog.name">
    <RouterLink
      :to="blog.path"
      class="projects flex mb-4 md:mb-10 hoverable-invert"
    >
      <div class="w-4/5 flex flex-col h-[160px]">
        <h3 class="text-3xl font-medium">
          {{ blog.meta.frontmatter.display }}
        </h3>
        <p class="mt-3 flex-1">
          {{ blog.meta.frontmatter.subtitle }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in blog.meta.frontmatter.tags"
            :key="tag"
            class="text-sm bg-gray-300 rounded-full px-2 py-1 block"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mt-5 justify-self-end dark:text-white dark:text-opacity-40">
          Published on {{ formatDate(blog.meta.frontmatter.publishDate) }}
        </div>
      </div>
      <img
        class="w-1/5 h-[160px] object-cover rounded-md"
        :src="blog.meta.frontmatter.image"
      />
    </RouterLink>
    <div class="border-t dark:border-white dark:border-opacity-40" />
  </div>
</template>

<style scoped></style>
