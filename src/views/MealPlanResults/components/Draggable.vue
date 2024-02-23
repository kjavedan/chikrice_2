<template>
  <div class="mt-8">
    <draggable v-model="rows" item-key="id" handle=".handle-meal">
      <template #item="{ index }">
        <div class="mb-8">
          <div class="flex justify-between items-center">
            <p class="underline font-bold">Meal {{ index + 1 }}(250cal)</p>
            <!-- Actions -->
            <div class="flex gap-3 cursor-pointer">
              <div class="i-clarity:edit-solid icon"></div>
              <div
                class="i-akar-icons:drag-horizontal-fill handle-meal w-5 h-5 cursor-move icon"
              ></div>
            </div>
          </div>
          <draggable
            v-model="rows[index].items"
            handle=".handle-food"
            group="people"
            class="mt-2"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="flex gap-2 items-center mb-1 py-1">
                <div class="i-ic:outline-drag-indicator cursor-move handle-food icon"></div>
                <div> {{ element.icon }} {{ element.value }} </div>
              </div>
            </template>
          </draggable>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref } from 'vue'

const rows = ref([
  {
    id: 1,
    calories: 10,
    macros: {
      pro: 10,
      carbs: 10,
      fats: 10
    },
    items: [
      {
        value: 'Eggs  - (150g) ~ 3eggs ',
        icon: '🥚',
        id: 2
      },
      {
        value: 'Bread  - (70g) ~ 2.8slice ',
        icon: '🍞',
        id: 3
      },
      {
        value: 'Vegetables  - eat as you wish 🤷‍♂️ ',
        icon: '🥬',
        id: 4
      },
      {
        value: 'Regular oil  - (15g) ~ 1 table spoon ',
        icon: '🌻',
        id: 5
      }
    ]
  },
  {
    id: 6,
    calories: 10,
    macros: {
      pro: 10,
      carbs: 10,
      fats: 10
    },
    items: [
      {
        value: 'Eggs  - (150g) ~ 3eggs ',
        icon: '🥚',
        id: 7
      },
      {
        value: 'Bread  - (70g) ~ 2.8slice ',
        icon: '🍞',
        id: 8
      },
      {
        value: 'Vegetables  - eat as you wish 🤷‍♂️ ',
        icon: '🥬',
        id: 9
      },
      {
        value: 'Regular oil  - (15g) ~ 1 table spoon ',
        icon: '🌻',
        id: 10
      }
    ]
  },
  {
    id: 11,
    calories: 10,
    macros: {
      pro: 10,
      carbs: 10,
      fats: 10
    },
    items: [
      {
        value: 'Eggs  - (150g) ~ 3eggs ',
        icon: '🥚',
        id: 12
      },
      {
        value: 'Bread  - (70g) ~ 2.8slice ',
        icon: '🍞',
        id: 13
      },
      {
        value: 'Vegetables  - eat as you wish 🤷‍♂️ ',
        icon: '🥬',
        id: 14
      },
      {
        value: 'Regular oil  - (15g) ~ 1 table spoon ',
        icon: '🌻',
        id: 15
      }
    ]
  },
  {
    id: 16,
    calories: 10,
    macros: {
      pro: 10,
      carbs: 10,
      fats: 10
    },
    items: [
      {
        value: 'Eggs  - (150g) ~ 3eggs ',
        icon: '🥚',
        id: 17
      },
      {
        value: 'Bread  - (70g) ~ 2.8slice ',
        icon: '🍞',
        id: 18
      },
      {
        value: 'Vegetables  - eat as you wish 🤷‍♂️ ',
        icon: '🥬',
        id: 19
      },
      {
        value: 'Regular oil  - (15g) ~ 1 table spoon ',
        icon: '🌻',
        id: 20
      }
    ]
  }
])
</script>

<style scoped>
.icon {
  color: var(--ep-text-color-regular);
}

.icon:hover {
  color: var(--ep-text-color-primary);
}
</style>
