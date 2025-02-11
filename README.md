
# Vue Sortable Component

A lightweight Vue 3 sortable component that supports both RTL (right-to-left) and LTR (left-to-right) layouts.

## Features
- Supports both **RTL** and **LTR** directions.
- Lightweight and dependency-free.
- Easy to integrate with Vue 3.
- Supports both **horizontal** and **vertical** sorting.
- Fully customizable via slots and styles.

## Installation
```sh
npm install @ziad_rashad/vue-sortable
```


## Usage
```vue
<script setup>
import { ref } from 'vue';
import VueSortable from 'vue-sortable-component';

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
</script>

<template>
  <VueSortable v-model="items" direction="horizontal">
    <template v-slot="{ item }">
      <div class="sortable-box">{{ item }}</div>
    </template>
  </VueSortable>
</template>

<style>
.sortable-box {
  padding: 10px;
  background: lightgray;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
}
</style>
```

## Props
| Prop       | Type     | Default      | Description |
|------------|---------|--------------|-------------|
| modelValue | Array   | `[]`         | List of sortable items. |
| direction  | String  | `horizontal` | Sorting direction (`horizontal` or `vertical`). |

## License
MIT
