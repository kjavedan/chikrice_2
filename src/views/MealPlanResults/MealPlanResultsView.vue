<template>
  <div class="md:mt-10">
    <MealPlanHeader title="mealPlanCongrats" link="editMealPlan" path="/" />

    <div class="mt-8 grid gap-8 md:grid-cols-2">
      <div>
        <MealPlanSummary :data="userInputsData" :mealPlanSummary="mealPlanSummary" />
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

import type { UserInputsTypes } from '../MealPlanGenerator/types/index'
import type { GroceryListTypes, AvailableMacrosTypes, MealPlanSummaryTypes } from './types'

import { useStorage } from '@/hooks/web/useStorage'

import GroceryList from './components/GroceryList.vue'
import MealPlanSummary from './components/MealPlanSummary.vue'
import MealPlanResult from './components/MealPlanResult.vue'

import { addCarbs } from './utils/addCarbs'
import { processWeight } from './utils/common'
import { addProteins } from './utils/addProteins'
import { calculatePlanSummary } from './utils/calculatePlanSummary'

const groceryList = ref<GroceryListTypes>({
  fats: [],
  carbs: [],
  fruits: [],
  proteins: [],
  vegetables: []
})

const { getStorage } = useStorage()

const mealPlanSummary = ref<MealPlanSummaryTypes>({
  macros: {
    pro: { amount: 0, calories: 0 },
    fat: { amount: 0, calories: 0 },
    carb: { amount: 0, calories: 0 }
  },
  calories: 0
})

const availableMacros = ref<AvailableMacrosTypes>()

const userInputsData = ref<UserInputsTypes>(getStorage('meal-plan-generator') || {})

const {
  goal: userGoal,
  macros: userMacros,
  carbs: userCarbsList,
  fruits: userFruitsList,
  calories: userCalories,
  proteins: userProteinsList,
  vegetables: userVegetablesList,
  goalAchievementSpeed
} = userInputsData.value

//FUNCS
const generateMealPlan = () => {
  //STEP 2 (CALCULATE THE MACROS & CALORIES)
  const { macros, calories } = calculatePlanSummary(
    userGoal,
    userCalories,
    goalAchievementSpeed,
    userMacros
  )

  mealPlanSummary.value = { macros, calories }

  availableMacros.value = {
    pro: macros.pro.amount,
    carbs: macros.carb.amount,
    fat: macros.fat.amount
  }

  //STEP 3(ADD THE CARBS)
  const carbsGroccery = addCarbs(
    userGoal,
    mealPlanSummary.value.macros,
    userCarbsList,
    userFruitsList,
    userVegetablesList,
    availableMacros.value
  )

  //STEP 4 (ADD THE PROTEINS)
  const proteinsGroccery = addProteins(userGoal, userProteinsList, availableMacros.value)

  //STEP 5 (ADD THE FATS)
  const fatsGroccery = [
    {
      value: 'oil',
      icon: '🫒🌻',
      isRaw: true,
      rawWeight: processWeight(availableMacros.value.fat, {}),
      cookedWeight: processWeight(availableMacros.value.fat, {
        isCount: true,
        countLabel: 'table spon',
        countWeight: 15
      })
    }
  ]

  groceryList.value = {
    ...carbsGroccery,
    proteins: proteinsGroccery,
    fats: fatsGroccery
  }
}

onBeforeMount(() => {
  const storedData = getStorage('meal-plan-generator')

  if (!storedData) {
    window.location.replace('/')
  }

  generateMealPlan()
})
</script>

<style scoped></style>
