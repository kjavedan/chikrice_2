<template>
  <div>
    <ElForm v-model="formData" label-position="top">
      <div class="grid items-center md:flex md:gap-2">
        <!-- Height -->
        <ElFormItem :label="$t('height')">
          <ElInput style="direction: ltr">
            <template #append>
              <ElSelect style="width: 70px" v-model="formData.heightUnit">
                <ElOption value="cm" label="cm" />
                <ElOption value="feet" label="feet" />
              </ElSelect>
            </template>
          </ElInput>
        </ElFormItem>

        <!-- Weight -->
        <ElFormItem label="weight">
          <ElInput style="direction: ltr">
            <template #append>
              <ElSelect style="width: 70px" v-model="formData.heightUnit">
                <ElOption value="kg" label="kg" />
                <ElOption value="lb" label="lb" />
              </ElSelect>
            </template>
          </ElInput>
        </ElFormItem>

        <!-- Age -->
        <ElFormItem label="age">
          <ElInput v-model="formData.age" style="direction: ltr" />
        </ElFormItem>
      </div>

      <!-- Gender -->
      <ElFormItem label="gender" style="direction: ltr">
        <ElRadioGroup v-model="formData.gender">
          <ElRadio label="male"> 🧍Male </ElRadio>
          <ElRadio label="female"> 🧍‍♀️Female </ElRadio>
        </ElRadioGroup>
      </ElFormItem>

      <!-- Activity Level -->
      <ElFormItem label="activityLevel" style="direction: ltr">
        <ElSelect v-model="formData.activityLevel">
          <ElOption value="1" label="BMR" />
          <ElOption value="2" label="Exercise 1-3 times/week	" />
          <ElOption value="3" label="Exercise 4-5 times/week	" />
          <ElOption value="4" label="Daily exercise or intense exercise 3-4 times/week	" />
          <ElOption value="5" label="Intense exercise 6-7 times/week	" />
          <ElOption value="6" label="Very intense exercise daily, or physical job	" />
        </ElSelect>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElRadioGroup,
  ElRadio
} from 'element-plus'

const formData = ref({
  age: 25,
  weight: 75,
  height: 180,
  gender: 'male',
  activityLevel: '3',
  weightUnit: 'kg',
  heightUnit: 'cm'
})
</script>

<style scoped></style>
