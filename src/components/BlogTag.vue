<template>
  <span
    :class="[
      'inline-flex text-xs md:text-sm items-center rounded-md px-2 py-1 font-medium ring-1 ring-inset',
      COLOR,
    ]"
  >
    {{ props.label }}
  </span>
</template>

<script setup lang="ts">
import { BLOG_TAG, type BlogTagType } from '../constants/blog';

const AVAILABLE_COLOR = {
  gray: 'gray',
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
  indigo: 'indigo',
  purple: 'purple',
  pink: 'pink',
  default: 'default',
} as const;

const props = defineProps<{
  label: BlogTagType;
}>();

const LABEL_COLOR_MAP = {
  [BLOG_TAG.personal]: AVAILABLE_COLOR.gray,
  [BLOG_TAG.selfEnrichment]: AVAILABLE_COLOR.yellow,
  [BLOG_TAG.inspiration]: AVAILABLE_COLOR.green,
} as const;

const COLOR = {
  [AVAILABLE_COLOR.gray]:
    'bg-gray-50 text-gray-600 ring-gray-500/10 dark:(bg-gray-400/10 text-gray-400 ring-gray-400/20)',
  [AVAILABLE_COLOR.red]:
    'bg-red-50 text-red-700 ring-red-600/10 dark:(bg-red-400/10 text-red-400 ring-red-400/20)',
  [AVAILABLE_COLOR.yellow]:
    'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:(bg-yellow-400/10 text-yellow-500 ring-yellow-400/20)',
  [AVAILABLE_COLOR.green]:
    'bg-green-50 text-green-700 ring-green-600/20 dark:(bg-green-500/10 text-green-400 ring-green-500/20)',
  [AVAILABLE_COLOR.blue]:
    'bg-blue-50 text-blue-700 ring-blue-700/10 dark:(bg-blue-400/10 text-blue-400 ring-blue-400/30)',
  [AVAILABLE_COLOR.indigo]:
    'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:(bg-indigo-400/10 text-indigo-400 ring-indigo-400/30)',
  [AVAILABLE_COLOR.purple]:
    'bg-purple-50 text-purple-700 ring-purple-700/10 dark:(bg-purple-400/10 text-purple-400 ring-purple-400/30)',
  [AVAILABLE_COLOR.pink]:
    'bg-pink-50 text-pink-700 ring-pink-700/10 dark:(bg-pink-400/10 text-pink-400 ring-pink-400/20)',
  [AVAILABLE_COLOR.default]: '',
}[LABEL_COLOR_MAP[props.label]];
</script>
