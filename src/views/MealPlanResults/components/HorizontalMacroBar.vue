<template>
  <div :style="styles" :class="['text-center']">
    <div class="text-xs font-bold md:text-sm">
      <small class="block md:inline"> ({{ amount }})g </small>
      <small class="block md:inline">
        {{ $t(name) }}
      </small>
    </div>
    <div>
      <div
        :class="[
          'h-2 rounded-md w-full',
          { 'bg-[var(--ep-color-error)]': name === 'proteins' },
          { 'bg-[var(--ep-color-success)]': name === 'carbs' },
          { 'bg-[var(--ep-color-warning)]': name === 'fats' }
        ]"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface PropsTypes {
  name: 'carbs' | 'proteins' | 'fats'
  amount: number
  width: number
}
const props = defineProps<PropsTypes>()

const styles = computed(() => ({
  width: `${props.width}%`
}))
</script>

<style scoped></style>
