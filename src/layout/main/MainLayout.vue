<template>
  <div class="min-h-dvh bg-[var(--ep-bg-color)]">
    <Header />
    <main class="container mx-auto mt-2 p-4 md:p-0"> <slot></slot> </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
