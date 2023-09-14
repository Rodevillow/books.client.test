<template>
  <header class="header container">
    <router-link :to="{ name: 'products'}">
      BOOKS SHOP
    </router-link>
    <UiIconCartEmpty />
  </header>
</template>

<scritp lang="ts" setup>

</scritp>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";

.header {
  border-radius: $default-border-radius;
  background-color: $primary-color;
  min-height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  a {
    text-decoration: none;
    color: $text-color;

    &:hover {
      color: $background-color;
    }
  }
}
</style>
<script setup lang="ts">
import UiIconCartEmpty from "@/components/UiIconCartEmpty.vue";
</script>