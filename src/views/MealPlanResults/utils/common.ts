import { SPRINT_DAYS } from './constants.ts'
import type { AvailableMacrosTypes } from '../types/index.ts'

export const updateAvailableMacros = (
  itemWeight: number,
  itemInfo: any,
  availableMacros: AvailableMacrosTypes
) => {
  const { carbs, protein, fat } = itemInfo
  const fatToDecrease = +((itemWeight / 100) * fat).toFixed(0)
  const carbsToDecrease = +((itemWeight / 100) * carbs).toFixed(0)
  const proteinToDecrease = +((itemWeight / 100) * protein).toFixed(0)

  availableMacros.fat -= fatToDecrease
  availableMacros.pro -= proteinToDecrease
  availableMacros.carbs -= carbsToDecrease
}

export const processWeight = (weight: any, info: any): string => {
  const parsedWeight = parseFloat(weight)

  if (isNaN(parsedWeight)) {
    return 'Invalid input. Please provide a valid numeric weight.'
  }

  const totalWeight = Math.ceil(SPRINT_DAYS * parsedWeight)

  let itemCount: string | number | undefined

  if (info.isCount) {
    const numberOfUnits = totalWeight / info.countWeight
    const roundedUnits = Math.ceil(numberOfUnits)
    itemCount = `${roundedUnits} ${info.countLabel}${roundedUnits >= 1 ? 's' : ''}`
  }

  if (totalWeight > 1000) {
    const weightInKg = totalWeight / 1000
    return `${weightInKg} kg  ${itemCount ? '(' + itemCount + ')' : ''}`
  } else {
    return `${totalWeight} g  ${itemCount ? '(' + itemCount + ')' : ''}`
  }
}
