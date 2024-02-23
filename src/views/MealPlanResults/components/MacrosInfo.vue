<template>
  <div class="mb-2 mt-3">
    <!-- Macros -->
    <div class="w-[90%] max-w-80 flex items-end gap-2">
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
</template>

<script setup lang="ts">
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
