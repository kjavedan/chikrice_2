<template>
  <div>
    <HeaderLink :question="stepData.question" :link="stepData.questionLink" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div
        v-for="goal in optionsData.goals"
        :key="goal.value"
        @click="onUpdate('goal', goal.value)"
        :class="[
          'bg-[var(--ep-color-card)]  rounded-md h-30 cursor-pointer md:h-50 lg:aspect-video lg:h-auto flex flex-col items-center justify-center gap-4',
          {
            'b-solid border-[var(--ep-color-primary)] shadow-md shadow-[var(--ep-color-primary)]':
              userInputsData.goal === goal.value
          }
        ]"
      >
        <span class="text-3xl">{{ goal.icon }}</span>
        <span>{{ $t(goal.value) }}</span>
      </div>
    </div>

    <FooterLink :link="stepData.footerLink" :path="stepData.footerPath" />
  </div>
</template>

<script setup lang="ts">
import HeaderLink from './HeaderLink.vue'
import FooterLink from './FooterLink.vue'
import { PropsTypes } from '../types'

defineProps<PropsTypes>()
</script>

<style></style>
