<template>
  <div class="mt-1 mt-4 underline text-[var(--ep-color-link)] cursor-pointer">
    {{ link }}
    <ArrowRight
  /></div>
</template>

<script setup lang="ts">
defineProps(['link', 'path'])
</script>

<style scoped></style>
