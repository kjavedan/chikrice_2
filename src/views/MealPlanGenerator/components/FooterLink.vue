<template>
  <div class="mt-1 mt-4 underline text-[var(--ep-color-link)] cursor-pointer">
    {{ link }}
    <div :class="['i-flowbite:arrow-right-outline', { 'rotate-180': isRotate() }]"></div
  ></div>
</template>

<script setup lang="ts">
import { isRotate } from '@/utils/is'

defineProps(['link', 'path'])
</script>

<style scoped></style>
