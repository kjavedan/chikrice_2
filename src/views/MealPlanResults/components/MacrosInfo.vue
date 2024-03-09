<template>
  <div class="mb-2 mt-3">
    <!-- Macros -->
    <div class="w-[90%] max-w-80 flex items-end gap-2">
      <HorizontalMacroBar name="carbs" :amount="mealData.macros.carb" :width="macrosRatio.carbs" />
      <HorizontalMacroBar
        name="proteins"
        :amount="mealData.macros.pro"
        :width="macrosRatio.proteins"
      />
      <HorizontalMacroBar name="fats" :amount="mealData.macros.fat" :width="macrosRatio.fats" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HorizontalMacroBar from './HorizontalMacroBar.vue'

import type { MacrosTypes } from '../../MealPlanGenerator/types/index'

interface PropsTypes {
  mealData: any
  macrosRatio: MacrosTypes
}
const props = defineProps<PropsTypes>()
console.log('🚀 ~ props:', props)
</script>

<style scoped></style>
