<template>
  <div class="mt-8">
    <draggable v-model="rows" item-key="id" handle=".handle">
      <template #item="{ index }">
        <div class="b-solid b-red">
          <p class="handle">#</p>
          <draggable v-model="rows[index].items" group="people" class="list-group" item-key="id">
            <template #item="{ element }">
              <div>
                <div> {{ element.name }} </div>
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
    name: 'day1',
    id: 0,
    items: [
      {
        name: 'John',
        id: 0
      },
      {
        name: 'khaled',
        id: 1
      },
      {
        name: 'ahmad',
        id: 2
      }
    ]
  },
  {
    name: 'day2',
    id: 1,
    items: [
      {
        name: 'aa',
        id: 0
      },
      {
        name: 'ff',
        id: 1
      },
      {
        name: 'cc',
        id: 2
      }
    ]
  }
])
</script>

<style scoped></style>
