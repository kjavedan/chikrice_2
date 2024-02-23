interface FoodItemTypes {
  icon: string
  value: string
  isRaw: boolean
  rawWeight: string
  cookedWeight: string
}

export interface AvailableMacrosTypes {
  pro: number
  fat: number
  carbs: number
}

interface MacroType {
  amount: number
  calories: number
}

export interface MacrosDetailTypes {
  pro: MacroType
  carb: MacroType
  fat: MacroType
}

export interface MealPlanSummaryTypes {
  macros: MacrosDetailTypes
  calories: number
}

export interface GroceryListTypes {
  fats: FoodItemTypes[]
  carbs: FoodItemTypes[]
  fruits: FoodItemTypes[]
  proteins: FoodItemTypes[]
  vegetables: FoodItemTypes[]
}
