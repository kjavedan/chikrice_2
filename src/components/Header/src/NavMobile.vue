<template>
  <div class="flex items-center justify-between px-4 py-2" style="direction: ltr">
    <h3 @click="$router.push('/')" class="cursor-pointer">
      <span> Chik </span>
      <span class="text-stroke">Rice</span>
    </h3>

    <el-drawer v-model="drawer" :direction="'ltr'" class="pl-4" size="75%">
      <template #header>
        <h3
          @click="$router.push('/')"
          class="cursor-pointer text-3xl text-[var(--ep-text-color-primary)]"
        >
          <span> Chik </span>
          <span class="text-stroke">Rice</span>
        </h3>
      </template>
      <nav class="pt-20">
        <ul class="flex flex-col gap-12">
          <RouterLink
            v-for="item in navData"
            :key="item.label"
            :to="{ name: item.name }"
            :class="['nav-link', { active: route.name === item.name }]"
            >{{ item.label }}</RouterLink
          >
        </ul>
      </nav>
    </el-drawer>
    <div class="flex items-center gap3">
      <LocaleDropdown />
      <ThemeSwitch />

      <div @click="drawer = true" class="i-mingcute:menu-fill text-xl"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import navConfig from './nav-config'

// NAVIGATION
const route = useRoute()

// REFS
const drawer = ref(false)
const navData = ref(navConfig())

// HOOKS
watch(route, () => {
  drawer.value = false
})

watch(drawer, () => {
  if (drawer.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped></style>
