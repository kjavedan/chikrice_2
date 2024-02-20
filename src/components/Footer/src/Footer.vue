<template>
  <div class="bg-[var(--ep-color-card)] p-20 mt-105">
    <ul class="flex flex-col items-center gap-8 container mx-auto md:items-start">
      <RouterLink v-for="item in navData" :key="item.label" :to="{ name: item.name }">
        <span>{{ item.icon }}</span>
        {{ $t(item.label) }}</RouterLink
      >
    </ul>
    <p class="text-center mt-10"
      >© {{ $t('allRightsReserved') }}
      <a href="https://chickrice.com">chickrice</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import navConfig from '@/components/Header/src/nav-config'

//refs
const navData = ref(navConfig)
</script>

<style lang="scss" scoped></style>
