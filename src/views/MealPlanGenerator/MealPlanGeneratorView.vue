<template>
  <!-- Progress bar -->
  <div class="progress-bar">
    <div class="progress-indicator" :style="{ width: (100 / 10.4) * step + '%' }"></div>
    <span class="step-label">{{ step * 10 }}%</span>
  </div>

  <!-- Header -->
  <div class="md:mt-10">
    <h1 class="mb-1 text-3xl">{{ $t('mealPlanGenerator') }} </h1>
    <div class="underline text-[var(--ep-color-link)]">
      {{ $t('whatMakesAGreatMealPlan') }}
      <div :class="['i-flowbite:arrow-right-outline', { 'rotate-180': isRotate() }]"></div
    ></div>

    <div class="mt-8">
      <h2>{{ $t('step') }} {{ step }}</h2>
    </div>
  </div>

  <!-- Step -->
  <div v-for="item in stepsData" :key="item.step">
    <!-- Active step -->
    <component
      :is="stepComponents[item.step]"
      :userInputsData="userInputsData"
      :onUpdate="onUpdateUserInputs"
      :optionsData="optionsData"
      :stepData="item"
      v-if="step === item.step"
    />
  </div>

  <!-- Footer -->
  <div class="mt-15 flex gap-4 justify-end w-full">
    <ElButton class="w-30" type="primary" plain :disabled="step === 1" @click="onBack"
      >back</ElButton
    >
    <ElButton class="w-30" type="primary" @click="onNext">Next</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw, watch } from 'vue'
import { isRotate } from '@/utils/is'
import { useRouter } from 'vue-router'

import { ElButton } from 'element-plus'

import { stepsConfig, optionsConfig } from './data.ts'

import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Step4 from './components/Step4.vue'
import Step5 from './components/Step5.vue'
import Step6 from './components/Step6.vue'
import Step7 from './components/Step7.vue'
import Step8 from './components/Step8.vue'
import Step9 from './components/Step9.vue'
import Step10 from './components/Step10.vue'
import { UserInputsTypes, OptionsTypes } from './types/index'

// NAVIGATION
const router = useRouter()

// REFS
const step = ref(3)

const stepsData = ref(stepsConfig)

const optionsData = ref<OptionsTypes>(optionsConfig)

const userInputsData = ref<UserInputsTypes>({
  snackNumber: 1,
  mealsNumber: 4,
  calories: 2000,
  goalAchievementSpeed: 'moderate',
  goal: 'loseWeight',
  fats: ['oliveOil', 'regularOil'],
  macros: {
    loseWeight: { proteins: '35', carbs: '40', fats: '25' },
    gainWeight: { proteins: '30', carbs: '40', fats: '30' }
  },
  carbs: ['oats', 'rice', 'potato'],
  fruits: ['apple', 'orange'],
  proteins: ['flankSteak', 'fish', 'eggs', 'chicken'],
  vegetables: ['tomato', 'lettuce', 'broccoli', 'cucumber', 'billPepper']
})

const stepComponents = ref(
  markRaw({
    1: Step1,
    2: Step2,
    3: Step3,
    4: Step4,
    5: Step5,
    6: Step6,
    7: Step7,
    8: Step8,
    9: Step9,
    10: Step10
  })
)

// FUNCS
const onNext = () => {
  if (step.value < 10) {
    step.value++
  } else if (step.value == 10) {
    router.push({ name: 'mealPlanResults' })
  }
}

const onBack = () => {
  if (step.value > 1) {
    step.value--
  }
}

const onUpdateUserInputs = (key: string, value: any) => {
  userInputsData.value[key] = value
}

// HOOKS
watch(userInputsData, () => {
  console.log(userInputsData)
})
</script>

<style lang="scss" scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 8px;
  align-items: center;
}

.progress-indicator {
  position: relative;
  height: 100%;
  background-color: var(--ep-color-primary);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transition: width 0.3s ease-in-out;
}

.step-label {
  margin-left: 4px;
  font-size: 10px;
}
</style>
