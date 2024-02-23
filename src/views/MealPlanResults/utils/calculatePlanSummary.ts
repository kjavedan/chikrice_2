export const calculatePlanSummary = (
  goal: string,
  calories: number,
  speed: string,
  macros: { proteins: number; carbs: number; fats: number }
) => {
  const caloriesList = {
    slow: 200,
    moderate: 400,
    fast: 600
  }

  let processedCalories: number

  // CALC CALORIES
  if (goal === 'loseWeight') {
    processedCalories = calories - caloriesList[speed]
  } else if (goal === 'gainWeight') {
    processedCalories = calories + caloriesList[speed]
  } else {
    processedCalories = calories
  }

  // CALC MACROS
  const { proteins: proRatio, carbs: carbRatio, fats: fatRatio } = macros

  const proCalories = calcMacrosCalorie(proRatio, processedCalories)
  const carbCalories = calcMacrosCalorie(carbRatio, processedCalories)
  const fatCalories = calcMacrosCalorie(fatRatio, processedCalories)

  const proAmount = calcMacrosAmount('pro', proCalories)
  const carbAmount = calcMacrosAmount('carb', carbCalories)
  const fatAmount = calcMacrosAmount('fat', fatCalories)

  return {
    calories: processedCalories,
    macros: {
      pro: { amount: proAmount, calories: proCalories },
      fat: { amount: fatAmount, calories: fatCalories },
      carb: { amount: carbAmount, calories: carbCalories }
    }
  }
}

const calcMacrosCalorie = (ratio: number, totalCalories: number): number => {
  return (ratio / 100) * totalCalories
}

const calcMacrosAmount = (name: string, calorie: number): number => {
  const res = name === 'fat' ? calorie / 9 : calorie / 4
  return +res.toFixed(1)
}
