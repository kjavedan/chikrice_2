export interface UserInputsTypes {
  mealsNumber: string
  snacksNumber: string
  budget: 'enough' | 'low'
  calories: number
  goalAchievementSpeed: 'slow' | 'moderate' | 'fast'
  isIncludeSweet: 'no' | 'yes'
  goal: 'loseWeight' | 'gainWeight' | 'optimzePerformance'
  fats: string[]
  macros: MacrosTypes
  isMacrosCustomized: Boolean
  carbs: string[]
  fruits: string[]
  proteins: string[]
  vegetables: string[]
}

export interface FoodListItemTypes {
  value: string
  icon?: string
}

export interface MacrosTypes {
  fats: number
  carbs: number
  proteins: number
}

export interface OptionsTypes {
  fats: FoodListItemTypes[]
  goals: FoodListItemTypes[]
  carbs: FoodListItemTypes[]
  fruits: FoodListItemTypes[]
  proteins: FoodListItemTypes[]
  vegetables: FoodListItemTypes[]
  goalAchievementSpeed: FoodListItemTypes[]
}

export interface PropsTypes {
  stepData: any
  stepError: string
  optionsData: OptionsTypes
  userInputsData: UserInputsTypes
  macrosRecommendation: MacrosTypes
  onUpdate: (key: string, value: any) => void
}
