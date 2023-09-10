<template>
  <li>
    <div class="flex items-center lg:items-start gap-2">
      <div
        class="mt-1 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-900/20 dark:ring-slate-100/50 print:hidden"
      >
        <img class="h-8 w-8 rounded-full" :src="companyLogo" :alt="company" />
      </div>
      <div class="flex-1 flex lg:flex-row flex-col justify-between">
        <div>
          <h3 class="font-bold">{{ company }}</h3>
          <div class="text-gray-500 text-sm">{{ designation }}</div>
        </div>
        <div class="text-gray-500 text-sm mt-2 lg:mt-0">
          {{ fromDate }} - {{ toDate }}
        </div>
      </div>
    </div>
    <ul class="py-2 pl-4 lg:pl-11 print:pl-0 lg:pr-4 text-sm lg:text-base">
      <li v-for="(item, idx) in descriptions" :key="idx">
        <span class="-ml-2 print:ml-0">›</span>
        {{ item }}
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  designation: string;
  company: string;
  companyLogo: string;
  fromDate: string;
  toDate: string;
  descriptions: string[];
}>();
</script>
