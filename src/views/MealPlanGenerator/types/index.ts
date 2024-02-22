export interface UserInputsTypes {
  snackNumber: number
  mealsNumber: number
  budget: 'enough' | 'low'
  calories: number
  goalAchievementSpeed: 'slow' | 'moderate' | 'fast'
  goal: 'loseWeight' | 'gainWeight' | 'optimzePerformance'
  fats: string[]
  macros: MacrosTypes
  carbs: string[]
  fruits: string[]
  proteins: string[]
  vegetables: string[]
}

interface Option {
  value: string
  label: string
  icon?: string
}

export interface MacrosTypes {
  fats: number
  carbs: number
  proteins: number
}

export interface OptionsTypes {
  fats: Option[]
  goals: Option[]
  carbs: Option[]
  fruits: Option[]
  proteins: Option[]
  vegetables: Option[]
  goalAchievementSpeed: Option[]
}

export interface PropsTypes {
  stepData: any
  optionsData: OptionsTypes
  userInputsData: UserInputsTypes
  macrosRecommendation: MacrosTypes
  onUpdate: (key: string, value: any) => void
}
