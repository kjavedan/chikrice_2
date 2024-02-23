<template>
  <div class="md:mt-10">
    <h1 class="mb-1 text-3xl">{{ $t(title) }} </h1>
    <div class="underline text-[var(--ep-color-link)]">
      {{ $t(link) }}
      <div :class="['i-flowbite:arrow-right-outline', { 'rotate-180': isRotate() }]"></div
    ></div>
  </div>
</template>

<script setup lang="ts">
import { isRotate } from '@/utils/is'

interface PropsTypes {
  title: string
  link: string
  path: string
}

defineProps<PropsTypes>()
</script>

<style scoped></style>
