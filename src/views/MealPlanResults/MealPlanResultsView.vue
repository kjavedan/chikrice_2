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
          :mealPlanData="mealPlanData"
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

import { generateGroceryList } from './utils/generateGroceryList'
import { generateMealPlanSummary } from './utils/generateMealPlanSummary'
import { generateMealPlanStructure } from './utils/generateMealPlanStructure'
import { populateMealPlanStructure } from './utils/populateMealPlanStructure'

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
console.log('🚀 ~ mealPlanData:', mealPlanData)

//FUNCS
const generateMealPlan = () => {
  //STEP 1 Calculate macros & calories
  const { macros, calories } = generateMealPlanSummary(
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
  const structure = generateMealPlanStructure(
    userCarbsList,
    userProteinsList,
    mealsNumber,
    snacksNumber,
    mealPlanSummary.value
  )

  // STEP 4 Fill the streucture with data
  const populatedPlan = populateMealPlanStructure(
    structure,
    userCarbsList,
    userFruitsList,
    userProteinsList
  )
  mealPlanData.value = populatedPlan
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

<!-- 
  what is the problem now?
  I'm not sure what is my next step

  Let's break it down step by step
  first -> the way the hired me was so simple
  second -> they didn't send me the offer letter before hand -> victor did before
  the offer letter would have mention that my sal will be cut to half in the trial period and the trial would have been 3mo
  third -> they havent update me on the situation with the new details that I was sopposed to receive
  forth -> I am hearing all kind of sospesus things about them in these 3 days
  fifth -> I don't like the env


  ! worst case
  What is the worst thing that can happen if I stay?
  first -> I work an entire month without getting compensated for it
  second -> I would have wasted my time enerjy health for nothing
  third -> I would have spended 8k AED for them 
  forth -> I would be so pissed off

  ? how can I avoid worst case ?
  first I need to get a decent answer and a clear paper to confirm my situation
  second I need to dig deeper with the team members and get closer to them to get more details
  third I need discuss the matter clearly with them 

  * best case
  What is the best thing that can happen if I stay?
  I get 20+k sal in the first month
  I get to lead the new big project
  I get decent experience and improve 
  I get solo accomidation 

  ? how can I insure the best case ?
  first I need to get a decent answer and clear paper to confirm my situation
  second I need show my skills and brealience to them so I can prove my position
  

  ? middle case
  What would happen if I only get 11.5K In first month?
  I would say that I have accomidation that is expensive and I can't handle it with this sal

  ? is the middle case is good is the right one for me at the moment ?
  I Don' think it's good because the pure gain is only 6k AED a month which is not the equivalent of my ability and services 
  at the moment

  ? what would happen if I left them now ?
  I won't have a job
  I need to either go for a job or do something with all my saving which is not a lot
  I will endure more stress
  I have to figure out have I will give this a shot and go for my own project


  * what is the best action I can take immidetly to help resolve my problem or at least it's a positive move
  1. what would be a good message to send?

  I have tow options 
    1. I still didn't recive any details from the HR
    2. I can talk to Tom in person sincd he refered me here and tell him about my concerns and 
    the trial period, accomidation, dashan and so on.
    I also can get something from tom as I speak with him 
    but how can I get him to talk with him outside ?

    what about hg?
    well if I send him the message that I haven't receive anything from the hr

    I can expect two things 
      1. he doesn't answer
      2. he says that they will send it to me 

    Well I can talk with tom first and then see what hong would say

    what I want form hg is max 1mo since this wasnt mention during the conversatuion we had at the interview time
    things would have been different if they would have told me this at the first plac
    at the day 1 they told me single room 20k and now half and no answer that is not a word

    do I think they care about us ? 
    absolutely no.

 -->
