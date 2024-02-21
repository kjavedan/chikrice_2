export interface UserInputsTypes {
  snackNumber: number
  mealsNumber: number
  calories: string
  goalAchievementSpeed: 'slow' | 'moderate' | 'fast'
  goal: 'loseWeight' | 'gainWeight' // Assuming these are the only possible values
  fats: string[]
  macros: {
    loseWeight: { proteins: string; carbs: string; fats: string }
    gainWeight: { proteins: string; carbs: string; fats: string }
  }
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
  onUpdate: (key: string, value: any) => void
}
