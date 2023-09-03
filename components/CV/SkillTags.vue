<template>
  <span
    v-for="skill in Object.values(SKILL)"
    :key="skill"
    :class="[
      'inline-flex text-sm items-center rounded-md px-2 py-1 font-medium ring-1 ring-inset',
      COLOR[skill],
    ]"
  >
    {{ skill }}
  </span>
</template>

<script setup lang="ts">
const SKILL = {
  typescript: 'TypeScript',
  node: 'NodeJS',
  react: 'ReactJS',
  vue: 'VueJS',
  svelte: 'SvelteJS',
  vite: 'ViteJS',
  nest: 'NestJS',
  go: 'Go',
} as const;

const COLOR = {
  [SKILL.typescript]:
    'bg-blue-50 text-blue-700 ring-blue-700/10 dark:(bg-blue-400/10 text-blue-400 ring-blue-400/30)',
  [SKILL.svelte]:
    'bg-orange-50 text-orange-700 ring-orange-600/10 dark:(bg-orange-400/10 text-orange-400 ring-orange-400/20)',
  [SKILL.node]:
    'bg-green-50 text-green-700 ring-green-600/20 dark:(bg-green-500/10 text-green-400 ring-green-500/20)',
  [SKILL.nest]:
    'bg-red-50 text-red-700 ring-red-600/10 dark:(bg-red-400/10 text-red-400 ring-red-400/20)',
  [SKILL.vue]:
    'bg-emerald-50 text-emerald-700 ring-emerald-700/20 dark:(bg-emerald-400/10 text-emerald-400 ring-emerald-400/30)',
  [SKILL.react]:
    'bg-sky-50 text-sky-700 ring-sky-700/10 dark:(bg-sky-400/10 text-sky-400 ring-sky-400/30)',
  [SKILL.vite]:
    'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:(bg-indigo-400/10 text-indigo-400 ring-indigo-400/30)',
  [SKILL.go]:
    'bg-cyan-50 text-cyan-700 ring-cyan-700/10 dark:(bg-cyan-400/10 text-cyan-400 ring-cyan-400/30)',
} as const;
</script>
