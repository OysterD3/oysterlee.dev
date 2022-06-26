<script lang="ts" setup>
const router = useRouter();
const projects = router
  .getRoutes()
  .filter(
    (v) =>
      v.path !== "/projects" &&
      v.path.startsWith("/projects") &&
      !v.path.endsWith(".html"),
  );
</script>

<template>
  <RouterLink
    v-for="project in projects"
    :key="project.name"
    :to="project.path"
    class="projects flex mb-4 md:mb-10 hoverable"
  >
    <img
      class="w-2/5 aspect-video object-cover mr-4 rounded-md"
      :src="project.meta.frontmatter.image"
    />
    <div class="w-3/5">
      <h3 class="text-3xl font-medium">
        {{ project.meta.frontmatter.display }}
      </h3>
      <div class="space-x-2 text-gray-400">
        {{ project.meta.frontmatter.stacks }}
      </div>
      <p class="mt-5">
        {{ project.meta.frontmatter.description }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped></style>
