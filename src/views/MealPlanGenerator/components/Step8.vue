<template>
  <div>
    <HeaderLink :question="stepData.question" :link="stepData.questionLink" />
    <ElCheckboxGroup v-model="userInputsData.vegetables" class="grid gap-4 justify-start">
      <ElCheckbox
        v-for="option in optionsData.vegetables"
        :label="option.value"
        :key="option.value"
      >
        <span>{{ option.icon }}</span>
        <span>{{ $t(option.value) }}</span>
      </ElCheckbox>
    </ElCheckboxGroup>

    <FooterLink :link="stepData.footerLink" :path="stepData.footerPath" />
  </div>
</template>

<script setup lang="ts">
import HeaderLink from './HeaderLink.vue'
import FooterLink from './FooterLink.vue'

import { ElCheckboxGroup, ElCheckbox } from 'element-plus'

import { PropsTypes } from '../types'

defineProps<PropsTypes>()
</script>

<style scoped></style>
