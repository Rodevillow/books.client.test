<template>
  <TheHeader />
  <main class="container">
    <div class="page">
      <router-view/>
    </div>
  </main>
  <TheFooter />
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";
.page {
  border-radius: $default-border-radius;
  background-color: $primary-color;

  min-height: calc(100vh - 200px - 20px - 40px);
  width: 100%;

  margin: 20px 0;
  padding: 20px;
}
</style>
