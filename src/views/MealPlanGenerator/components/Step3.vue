<template>
  <div>
    <HeaderLink :question="stepData.question" :link="stepData.questionLink" />
    <div class="flex items-center gap-4 max-w-100">
      <div class="relative">
        <ElInput
          v-model="userInputsData.calories"
          size="large"
          type="number"
          :placeholder="$t('enterYourCalories')"
          class="mt-2"
          @blur="validateCalories"
        />
        <StepError :error="stepError" />
      </div>
      <div class="flex items-center gap-2">
        <span class="whitespace-nowrap"> {{ $t('dontKnow') }}? </span>
        <ElButton type="primary" text @click="dialogVisible = true">{{ $t('calculate') }}</ElButton>
      </div>
    </div>
    <Br />
    <FooterLink :link="stepData.footerLink" :path="stepData.footerPath" />
  </div>

  <ElDialog
    v-model="dialogVisible"
    :title="$t('bmrCalculator')"
    width="95%"
    style="max-width: 500px"
  >
    <BmrCalculator :updateCalories="handleUpdate" />

    <template #footer>
      <div class="dialog-footer flex gap-2 justify-end">
        <ElButton type="primary" @click="handleUse" class="w-full"> {{ $t('use') }}</ElButton>
      </div>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderLink from './HeaderLink.vue'
import FooterLink from './FooterLink.vue'
import { ElInput, ElDialog, ElButton } from 'element-plus'
import { PropsTypes } from '../types'

const props = defineProps<PropsTypes>()

const calories = ref('2000')
const caloriesError = ref(false)
const dialogVisible = ref(false)

const handleUpdate = (value: string): void => {
  calories.value = value
}

const handleUse = (): void => {
  props.onUpdate('calories', calories)
  dialogVisible.value = false
}

const validateCalories = (): void => {
  const enteredCalories = props.userInputsData.calories
  if (enteredCalories < 1200) {
    caloriesError.value = true
  } else {
    caloriesError.value = false
  }
}
</script>

<style></style>
