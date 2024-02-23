<template>
  <div class="mt-8">
    <h4
      >{{ $t('youCanCustomizeMealPlan') }}
      <span>
        (
        <div class="i-ic:outline-drag-indicator"></div>,
        <div class="i-akar-icons:drag-horizontal-fill"></div>
        )
      </span>
      {{ $t('icons') }}
    </h4>
    <!-- Day 1 -->
    <div class="mt-8" v-for="(value, key) in data" :key="key">
      <div class="b-b-solid b-[#E0E0E0] dark:b-[#5B5656]">
        <div class="font-extrabold text-2xl">{{ $t('day') }} 1</div>
      </div>
      <Draggable :macrosDetails="macrosDetails" :macrosRatio="macrosRatio" :mealPlanData="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Draggable from './Draggable.vue'

import type { MacrosDetailTypes } from '../types'
import type { MacrosTypes } from '../../MealPlanGenerator/types/index'

interface PropsTypes {
  macrosDetails: MacrosDetailTypes
  macrosRatio: MacrosTypes
}
defineProps<PropsTypes>()

const data = ref({
  2: [
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
  ],
  1: [
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
  ],
  3: [
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
  ]
})
</script>

<style scoped></style>
