<template>
  <button class="button-default" @click="handleClick"><slot/></button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])
const handleClick = () => emit('click')
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";

.button-default {
  border: 1px solid $text-color;
  background-color: transparent;
  border-radius: 10px;
  padding: 20px 40px;
  color: $text-color;
  transition: .1s;

  &:hover {
    background-color: $text-color;
    opacity: .5;
    transition: .3s;
    color: $background-color;
  }

  &:active {
    opacity: .7;
    transition: .1s;
  }
}
</style>