<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="balloon1">
    {{ modelValue }}
    <button @click="$emit('update:modelValue', 'Awesome')">Click!</button>
  </div>
</template>

<style>
.balloon1 {
  height: 100px;
}
.ymaps-2-1-79-balloon {
  height: 100px;
}
.ymaps-2-1-79-balloon__content ymaps {
  height: 100% !important;
}
</style>
