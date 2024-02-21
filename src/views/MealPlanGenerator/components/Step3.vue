<template>
  <div>
    <HeaderLink :question="stepData.question" :link="stepData.questionLink" />
    <div class="flex items-end gap-4 max-w-100">
      <ElInput
        v-model="userInputsData.calories"
        size="large"
        type="number"
        :placeholder="$t('enterYourCalories')"
        class="mt-2"
      />
      <div class="flex items-center gap-2">
        <span class="whitespace-nowrap"> {{ $t('dontKnow') }}? </span>
        <ElButton type="primary" text @click="dialogVisible = true">{{ $t('calculate') }}</ElButton>
      </div>
    </div>

    <FooterLink :link="stepData.footerLink" :path="stepData.footerPath" /> kmln;lkj
  </div>

  <ElDialog
    v-model="dialogVisible"
    :title="$t('bmrCalculator')"
    width="95%"
    style="max-width: 500px"
  >
    <BmrCalculator />

    <template #footer>
      <div class="dialog-footer flex gap-2 justify-end">
        <ElButton type="primary" class="w-full"> {{ $t('use') }}</ElButton>
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

const dialogVisible = ref(true)

defineProps<PropsTypes>()
</script>

<style scoped></style>
