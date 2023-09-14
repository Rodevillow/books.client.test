<template>
  <span class="price"><slot/></span>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";

.price {
  color: $text-price-color;
}
</style>