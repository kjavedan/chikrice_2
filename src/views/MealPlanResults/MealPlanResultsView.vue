<template>
  <div class="md:mt-10">
    <MealPlanHeader title="mealPlanCongrats" link="editMealPlan" path="/" />

    <div class="mt-8 grid gap-8 md:grid-cols-2">
      <div>
        <MealPlanSummary
          :data="userInputsData"
          :mealPlanSummary="mealPlanSummary"
          :isIncludeSweet="isIncludeSweet"
        />
        <MealPlanResult
          :macrosDetails="mealPlanSummary.macros"
          :macrosRatio="userInputsData.macros"
        />
      </div>
      <GroceryList :groceryList="groceryList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import type { GroceryListTypes, MealPlanSummaryTypes } from './types'
import type { UserInputsTypes } from '../MealPlanGenerator/types/index'

import { useStorage } from '@/hooks/web/useStorage'

import GroceryList from './components/GroceryList.vue'
import MealPlanResult from './components/MealPlanResult.vue'
import MealPlanSummary from './components/MealPlanSummary.vue'

import { generateGroceryList } from './utils/GenerateGroceryList'
import { calculatePlanSummary } from './utils/calculatePlanSummary'
import { defineMealPlanStructure } from './utils/mealPlanStructure'

// LOCAL HOOKS
const { getStorage } = useStorage()

// REFS
const userInputsData = ref<UserInputsTypes>(getStorage('meal-plan-generator') || {})

const {
  goal: userGoal,
  macros: userMacros,
  carbs: userCarbsList,
  fruits: userFruitsList,
  calories: userCalories,
  proteins: userProteinsList,
  vegetables: userVegetablesList,
  mealsNumber,
  snacksNumber,
  isIncludeSweet,
  goalAchievementSpeed
} = userInputsData.value

const groceryList = ref<GroceryListTypes>({
  fats: [],
  carbs: [],
  fruits: [],
  proteins: [],
  vegetables: []
})

const mealPlanSummary = ref<MealPlanSummaryTypes>({
  macros: {
    pro: { amount: 0, calories: 0 },
    fat: { amount: 0, calories: 0 },
    carb: { amount: 0, calories: 0 }
  },
  calories: 0
})

const mealPlanData = ref({})

//FUNCS
const generateMealPlan = () => {
  //STEP 1 Calculate macros & calories
  const { macros, calories } = calculatePlanSummary(
    userGoal,
    userMacros,
    userCalories,
    isIncludeSweet,
    goalAchievementSpeed
  )
  mealPlanSummary.value = { macros, calories }

  // STEP 2 Generate grocery list
  const { carbsGrocery, fruitsGrocery, vegetablesGrocery, proteinsGrocery } = generateGroceryList(
    userCarbsList,
    userFruitsList,
    userProteinsList,
    userVegetablesList
  )
  groceryList.value = {
    fats: [{ value: 'oil', icon: '🌻' }],
    carbs: carbsGrocery,
    fruits: fruitsGrocery,
    proteins: proteinsGrocery,
    vegetables: vegetablesGrocery
  }

  // STEP 3 Create the plan structure & Details
  const structure = defineMealPlanStructure(
    userCarbsList,
    userProteinsList,
    mealsNumber,
    snacksNumber,
    mealPlanSummary.value
  )
  console.log('🚀 ~ generateMealPlan ~ structure:', structure)

  // STEP 4 Generate the meal plan
  mealPlanData.value = structure
}

// VUE HOOKS
onBeforeMount(() => {
  const storedData = getStorage('meal-plan-generator')

  if (!storedData) {
    window.location.replace('/')
  }

  generateMealPlan()
})
</script>

<style scoped></style>
