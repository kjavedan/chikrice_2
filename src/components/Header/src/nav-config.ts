import { useI18n } from 'vue-i18n'

export default () => {
  const { t } = useI18n()

  const data = [
    { label: t('home'), name: 'home' },
    { label: t('bmrCalculator'), name: 'bmr' },
    { label: t('mealPlanGenerator'), name: 'meal' },
    { label: t('workoutPlanGenerator'), name: 'workout' }
  ]

  return data
}
