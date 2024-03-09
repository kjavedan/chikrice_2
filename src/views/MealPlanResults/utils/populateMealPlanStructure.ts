import CarbsBank from '@/data/carbs'
import FruitsBank from '@/data/fruits'
import ProteinsBank from '@/data/proteins'
import regularOil from '@/data/fats/regularOil'
import { mealPriorityListCarbs, mealPriorityListProteins } from './priorityList'

interface MealPlan {
  [key: string]: {
    data: any[]
  }
}

export const populateMealPlanStructure = (
  structure,
  userCarbsList,
  userFruitsList,
  userProteinsList
) => {
  const mealPlan = { ...structure }
  const carbsItems = userCarbsList.map((carb) => CarbsBank[carb])
  const fruitsItems = userFruitsList.map((fruit) => FruitsBank[fruit])
  const proteinsItems = userProteinsList.map((protein) => ProteinsBank[protein])

  const addCarb = (meal, mealNumber) => {
    if (meal.type === 'meal') {
      addMealFood(meal, mealNumber, carbsItems, mealPriorityListCarbs, CarbsBank, 'carb')
    } else {
      // snack
      const selectedSnack = fruitsItems[Math.floor(Math.random() * fruitsItems.length)]
      meal.items = [...meal.items, selectedSnack]
      calculateCarbMacro(selectedSnack, meal.macros)
    }
  }

  const isAddedProtenWhey = {}

  const addProtein = (meal, mealNumber, key) => {
    if (meal.type === 'meal') {
      addMealFood(
        meal,
        mealNumber,
        proteinsItems,
        mealPriorityListProteins,
        ProteinsBank,
        'portion'
      )
    } else {
      const isProteinWhey = proteinsItems.find((pro) => pro.value === 'proteinWhey')
      if (isProteinWhey && !isAddedProtenWhey[key]) {
        isAddedProtenWhey[key] = true
        meal.items = [...meal.items, ProteinsBank.proteinWhey]
        calculateProteinMacro(ProteinsBank.proteinWhey, meal.macros)
      }
    }
  }

  const addFatAndVegis = (meal) => {
    // not every meal would have vegis and fats
    if (meal.type === 'meal') {
      meal.items = [
        ...meal.items,
        { ...regularOil, weight: 'only if necessary(minimum)' },
        { value: 'mixedVegis', icon: '🥒🍅🥬', weight: 'eat as you wish' }
      ]
    }
    calculateFatMacro(meal)
  }

  const addMealFood = (
    meal,
    mealNumber,
    categoryItems,
    categoryPriorityList,
    categoryBank,
    type
  ) => {
    const priorityList = categoryPriorityList[mealNumber]

    // Step 1: Filter the priorityList
    const filteredList = priorityList.filter((item) =>
      categoryItems.some((carb) => carb.value === item)
    )

    // Step 2: Choose randomly from filteredList or categoryItems if filteredList is empty
    const selectedItem =
      filteredList.length > 0
        ? filteredList[Math.floor(Math.random() * filteredList.length)]
        : categoryItems[Math.floor(Math.random() * categoryItems.length)]

    const itemToAdd = selectedItem instanceof Object ? selectedItem : categoryBank[selectedItem]

    meal.items = [...meal.items, itemToAdd]

    type === 'carb'
      ? calculateCarbMacro(itemToAdd, meal.macros)
      : calculateProteinMacro(itemToAdd, meal.macros)
  }

  const calculateCarbMacro = (item, macros) => {
    // Step 1: Create new properties to add to the item
    item.weight = 0
    item.macros = { carb: 0, pro: 0, fat: 0 }

    // Step 2: Calculate how much weight of the specific item we need to reach the macros.carb value
    const foodWeight = (macros.carb / item.nutrientFacts.carbs) * item.portionWeight

    // Step 3: Fill the calculated amount of macros to the properties
    item.weight = Math.round(foodWeight) + 'g'
    item.macros.carb = macros.carb
    item.macros.pro = Math.round((item.nutrientFacts.protein / item.portionWeight) * foodWeight)
    item.macros.fat = Math.round((item.nutrientFacts.fat / item.portionWeight) * foodWeight)
  }

  const calculateProteinMacro = (item, macros) => {
    item.weight = 0
    item.macros = { carb: 0, pro: 0, fat: 0 }

    const availableProtein = macros.pro - item.macros.pro
    const foodWeight = (availableProtein / item.nutrientFacts.protein) * item.portionWeight

    item.weight = Math.round(foodWeight) + 'g'
    item.macros.carb += Math.round((item.nutrientFacts.carbs / item.portionWeight) * foodWeight)
    item.macros.pro += +availableProtein
    item.macros.fat += Math.round((item.nutrientFacts.fat / item.portionWeight) * foodWeight)
  }
  const calculateFatMacro = (meal) => {
    console.log(meal)
  }
  // Function to populate meals for a day
  const populateMeals = (key, day) => {
    day.forEach((meal, index) => {
      addCarb(meal, index)
      addProtein(meal, index, key)
      addFatAndVegis(meal)
    })
  }

  // Assuming mealPlan is of type MealPlan
  for (const [key, value] of Object.entries<MealPlan>(mealPlan)) {
    populateMeals(key, value.data)
  }

  console.log(mealPlan)

  // Return the populated meal plan
  return mealPlan
}
