<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  modelValue: any[];
  direction?: "horizontal" | "vertical";
}>();

const emit = defineEmits(["update:modelValue"]);

const draggedIndex = ref<number | null>(null);

const containerClass = computed(() => ({
  "sortable-container": true,
  "sortable-horizontal": props.direction !== "vertical",
  "sortable-vertical": props.direction === "vertical",
}));

const onDragStart = (event: DragEvent, index: number) => {
  draggedIndex.value = index;
  event.dataTransfer?.setData("text/plain", index.toString());
  setTimeout(() => {
    event.target && (event.target as HTMLElement).classList.add("dragging");
  }, 0);
};

const onDragEnd = (event: DragEvent) => {
  if (event.target) {
    (event.target as HTMLElement).classList.remove("dragging");
  }
  draggedIndex.value = null;
};

const onDragOver = (event: DragEvent, targetIndex: number) => {
  event.preventDefault();
  if (draggedIndex.value === null || draggedIndex.value === targetIndex) return;

  const updatedItems = [...props.modelValue];
  const draggedItem = updatedItems.splice(draggedIndex.value, 1)[0];
  updatedItems.splice(targetIndex, 0, draggedItem);

  emit("update:modelValue", updatedItems);
  draggedIndex.value = targetIndex;
};
</script>

<template>
  <div :class="containerClass">
    <div
      v-for="(item, index) in modelValue"
      :key="index"
      class="sortable-item"
      draggable="true"
      @dragstart="onDragStart($event, index)"
      @dragend="onDragEnd"
      @dragover="onDragOver($event, index)"
    >
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<style scoped>
.sortable-container {
  display: flex;
}

.sortable-vertical {
  flex-direction: column;
}

.sortable-item {
  cursor: grab;
  user-select: none;
}

.sortable-item.dragging {
  opacity: 0.5;
  transform: scale(1.01);
}
</style>
