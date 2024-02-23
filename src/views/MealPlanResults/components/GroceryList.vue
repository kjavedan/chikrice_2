<template>
  <div class="rounded-lg bg-[var(--ep-color-card)] p-6 max-w-120">
    <h3 class="text-2xl">{{ $t('groceryList') }} (3 {{ $t('days') }})</h3>
    <div class="mt-6">
      <!-- GROUPS -->
      <div class="mt-6" v-for="(group, key) in groceryList" :key="key">
        <div class="font-bold mb-2">{{ $t(key) }}</div>
        <div class="">
          <div
            class="flex items-center justify-between b-b-solid b-b-1 b-[--ep-color-gray] py-2"
            v-for="(item, index) in group"
            :key="index"
          >
            <p>{{ item.icon }} {{ $t(item.value) }}</p>
            <span>{{ item.isRaw ? item.rawWeight : item.cookedWeight }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GroceryListTypes } from '../types'

interface PropsTypes {
  groceryList: GroceryListTypes
}
defineProps<PropsTypes>()
</script>

<style scoped></style>
