<template>
  <div class="mt-8">
    <h4>You can customize your meal plan by drag and drop the food items & meal order.</h4>
    <!-- Day 1 -->
    <div class="mt-8">
      <div class="flex items-end justify-between gap-4 md:gap-20">
        <div
          class="py-1.5 px-4 bg-[var(--ep-color-card)] rounded-md w-fit mt-6 font-bold whitespace-nowrap"
          >Day 1</div
        >
        <!-- Macros -->
        <div class="w-[65%] max-w-120 flex items-end gap-2">
          <HorizontalMacroBar
            name="carbs"
            :amount="macrosDetails.carb.amount"
            :width="macrosRatio.carbs"
          />
          <HorizontalMacroBar
            name="proteins"
            :amount="macrosDetails.pro.amount"
            :width="macrosRatio.proteins"
          />
          <HorizontalMacroBar
            name="fats"
            :amount="macrosDetails.fat.amount"
            :width="macrosRatio.fats"
          />
        </div>
      </div>
      <Draggable />
    </div>
  </div>
</template>

<script setup lang="ts">
import Draggable from './Draggable.vue'
import HorizontalMacroBar from './HorizontalMacroBar.vue'

import type { MacrosDetailTypes } from '../types'
import type { MacrosTypes } from '../../MealPlanGenerator/types/index'

interface PropsTypes {
  macrosDetails: MacrosDetailTypes
  macrosRatio: MacrosTypes
}
defineProps<PropsTypes>()
</script>

<style scoped></style>
