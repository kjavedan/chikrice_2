<template>
  <div> Meal plan generator </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { isLtr } from '@/utils/is'
import { useRouter } from 'vue-router'

// NAVIGATION
const router = useRouter()

// REFS
const step = ref(1)
const ltr = ref(isLtr())

// COMPUTED
const direction = computed(() => (ltr.value ? { direction: 'ltr' } : { direction: 'rtl' }))

// FUNCS
const onNext = () => {
  if (step.value < 9) {
    step.value++
  } else if (step.value == 9) {
    console.log(data.value)
    router.push({ name: 'mealPlanResults' })
  }
}

const onBack = () => {
  if (step.value > 1) {
    step.value--
  }
}
</script>

<style lang="scss" scoped></style>
