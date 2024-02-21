<template>
  <p class="mt-1 text-[var(--ep-text-color-regular)] cursor-pointer mb-5">
    {{ $t(question) }}
    <span v-if="link"> {{ link }}</span>
  </p>
</template>

<script setup lang="ts">
defineProps(['question', 'link'])
</script>
<style scoped></style>
