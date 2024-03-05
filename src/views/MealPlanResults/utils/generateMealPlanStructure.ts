import { MealPlanSummaryTypes } from '../types'

export const generateMealPlanStructure = (
  carbsList: string[],
  proteinsList: string[],
  mealsNumber: string,
  snacksNumber: string,
  mealPlanSummary: MealPlanSummaryTypes
) => {
  const splitMacrosEqually = (numberOfMealsOrSnacks: number, type: 'meal' | 'snack') => {
    const { macros, calories } = mealPlanSummary
    const macroPercentage = type === 'meal' ? 0.75 : 0.25

    const unitMacros = {
      pro: (macros.pro.amount * macroPercentage) / numberOfMealsOrSnacks,
      carb: (macros.carb.amount * macroPercentage) / numberOfMealsOrSnacks,
      fat: (macros.fat.amount * macroPercentage) / numberOfMealsOrSnacks
    }

    const unitCalories = (calories * macroPercentage) / numberOfMealsOrSnacks

    return { calories: unitCalories, macros: unitMacros }
  }

  const mealTemplate = {
    type: 'meal',
    ...splitMacrosEqually(+mealsNumber, 'meal'),
    items: []
  }

  const snackTemplate = {
    type: 'snack',
    ...splitMacrosEqually(+snacksNumber, 'snack'),
    items: []
  }

  const carbsVeriety = Math.ceil(carbsList.length / +mealsNumber)
  const proteinsVeriety = Math.ceil(proteinsList.length / +mealsNumber)

  const numberOfDays = Math.max(proteinsVeriety, carbsVeriety)

  const populateDailyMeals = () => {
    const mealsData: any = []

    for (let i = 0; i < +mealsNumber; i++) {
      mealsData.push({ ...mealTemplate }) // Copy mealTemplate to avoid reference sharing
    }

    return mealsData
  }

  const populateDailySnacks = () => {
    const snacksData: any = []

    for (let i = 0; i < +snacksNumber; i++) {
      snacksData.push({ ...snackTemplate }) // Copy snackTemplate to avoid reference sharing
    }

    return snacksData
  }

  const generatePlanStructure = () => {
    const data: any = {} // Initialize data with an empty object

    for (let i = 1; i <= numberOfDays; i++) {
      data[i] = [...populateDailyMeals(), ...populateDailySnacks()]
    }

    return data
  }

  const structure = generatePlanStructure()

  return structure
}
