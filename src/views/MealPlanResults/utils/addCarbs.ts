// Importing necessary data and constants
import carbsBank from '@/data/carbs'
import fruitsBank from '@/data/fruits'
import vegetablesBank from '@/data/vegetables'
import { processWeight, updateAvailableMacros } from './common.ts'
import { CARBS_SPLIT_RATIO } from './constants.ts'
import type { AvailableMacrosTypes, MacrosDetailTypes } from '../types'

// Function to add carbs to the meal plan based on user inputs
export const addCarbs = (
  goal: string,
  macros: MacrosDetailTypes,
  userCarbsList: string[],
  userFruitsList: string[],
  userVegetablesList: string[],
  availableMacros: AvailableMacrosTypes
) => {
  // Calculate daily carbs macros based on the goal and user input
  const carbsMacrosPerDay = Object.fromEntries(
    (Object.entries(CARBS_SPLIT_RATIO[goal]) as [string, number][]).map(([type, ratio]) => [
      type,
      +(macros.carb.amount * ratio).toFixed(1)
    ])
  )

  // Function to divide total carbs equally among items in a list
  const divideCarbsEqually = (totalCarbs: number, itemList: string[]): number => {
    const result = (totalCarbs / itemList.length).toFixed(1)
    return +result
  }

  // Calculate carbs per item for vegetables, fruits, and main carbs
  const carbPerVegetableItem = divideCarbsEqually(carbsMacrosPerDay.vegis, userVegetablesList)
  const carbPerFruitItem = divideCarbsEqually(carbsMacrosPerDay.fruits, userFruitsList)
  const carbPerMainCarbItem = divideCarbsEqually(carbsMacrosPerDay.main, userCarbsList)

  // Function to generate a grocery list for a specific carb type
  const generateCarbsGroceryList = (
    carbsBank: any,
    userCarbsList: string[],
    carbsAmountToConvert: number
  ) =>
    userCarbsList.map((item: string) => {
      const itemDetails = carbsBank[item]
      let rawWeight = 0
      let cookedWeight = 0

      if (itemDetails?.isRaw) {
        rawWeight = Math.round((carbsAmountToConvert / itemDetails.nutrientFactsRaw.carbs) * 100)
      }

      cookedWeight = Math.round((carbsAmountToConvert / itemDetails.nutrientFacts.carbs) * 100)
      updateAvailableMacros(cookedWeight, itemDetails.nutrientFacts, availableMacros)

      //ADD THE GROCCERY WEIGHT BASE ON SPRINT PERIOD
      return {
        value: itemDetails.value,
        label: itemDetails.label,
        rawWeight: processWeight(rawWeight, itemDetails),
        cookedWeight: processWeight(cookedWeight, itemDetails),
        isRaw: itemDetails.isRaw,
        icon: itemDetails?.icon || '',
        foodBoxType: itemDetails.foodBoxType
      }
    })

  // Generate grocery lists for each type of carb
  const vegetableGrocery = generateCarbsGroceryList(
    vegetablesBank,
    userVegetablesList,
    carbPerVegetableItem
  )
  const fruitsGrocery = generateCarbsGroceryList(fruitsBank, userFruitsList, carbPerFruitItem)
  const mainCarbGrocery = generateCarbsGroceryList(carbsBank, userCarbsList, carbPerMainCarbItem)

  // Return the final carbs grocery list
  return {
    carbs: mainCarbGrocery,
    fruits: fruitsGrocery,
    vegetables: vegetableGrocery
  }
}
