import CarbsBank from '@/data/carbs'
import FruitsBank from '@/data/fruits'
import ProteinsBank from '@/data/proteins'
import { mealPriorityListCarbs, mealPriorityListProteins } from './priorityList'

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

  const addMealCarb = (meal, mealNumber) => {
    if (meal.type === 'meal') {
      const priorityList = mealPriorityListCarbs[mealNumber]

      // Step 1: Filter the priorityList for carbs
      const filteredCarbsList = priorityList.filter((item) =>
        carbsItems.some((carb) => carb.value === item)
      )

      // Step 2: Choose randomly from filteredList or carbsItems if filteredList is empty
      const selectedCarb =
        filteredCarbsList.length > 0
          ? filteredCarbsList[Math.floor(Math.random() * filteredCarbsList.length)]
          : carbsItems[Math.floor(Math.random() * carbsItems.length)]

      meal.items = [
        ...meal.items,
        selectedCarb instanceof Object ? selectedCarb : CarbsBank[selectedCarb]
      ]
    } else {
      // meal.type is snack
      const selectedSnack = fruitsItems[Math.floor(Math.random() * fruitsItems.length)]
      meal.items = [...meal.items, selectedSnack]
    }
  }

  const addMealProtein = (meal, mealNumber) => {
    if (meal.type === 'meal') {
      const priorityList = mealPriorityListProteins[mealNumber]

      // Step 1: Filter the priorityList for proteins
      const filteredProteinsList = priorityList.filter((item) =>
        proteinsItems.some((protein) => protein.value === item)
      )

      // Step 2: Choose randomly from filteredList or proteinsItems if filteredList is empty
      const selectedProtein =
        filteredProteinsList.length > 0
          ? filteredProteinsList[Math.floor(Math.random() * filteredProteinsList.length)]
          : proteinsItems[Math.floor(Math.random() * proteinsItems.length)]

      meal.items = [...meal.items, ProteinsBank[selectedProtein]]
    }
  }

  const addMealFatAndVegis = (meal) => {
    if (meal.type === 'meal') {
      meal.items = [
        ...meal.items,
        { value: 'oil', icon: '🌻' },
        { value: 'mixedVegis', icon: '🥒🍅🥬' }
      ]
    }
  }

  // Function to populate meals for a day
  const populateMeals = (day) => {
    day.forEach((meal, index) => {
      addMealCarb(meal, index)
      addMealProtein(meal, index)
      addMealFatAndVegis(meal)
    })
  }

  // Loop over days and populate meals
  for (const [, value] of Object.entries(mealPlan)) {
    populateMeals(value)
  }

  // Return the populated meal plan
  return mealPlan
}
