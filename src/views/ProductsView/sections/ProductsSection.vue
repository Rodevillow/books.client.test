<template>
  <div class="products-section">
    <Card v-for="book in props.books"
          :id="book.id"
          :title="book.title"
          :author="book.author"
          :price="book.price"
          :key="book.id"
    />
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue"

const props = defineProps({
  books: {
    type: Array,
    default: []
  }
})
</script>

<style lang="scss" scoped>
.products-section {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>