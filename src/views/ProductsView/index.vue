<template>
  <div class="products">
    <ProductsSection v-if="!isLoading" :books="books" />
  </div>
  <div class="products__is-loading" v-if="isLoading">
    <UiSpinner />
  </div>
</template>

<script lang="ts" setup>
import UiSpinner from "@/components/UiSpinner.vue"
import ProductsSection from "@/views/ProductsView/sections/ProductsSection.vue"

import useApi from "@/utils/api"
import {onMounted, ref} from "vue"

const api = useApi()

const books = ref([])
const isLoading = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true
    const response = await api.get('books')
    books.value = response.data?.books
  } catch ({message}) {
    console.error(message)
  } finally {
    isLoading.value = false
  }
})


</script>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";

.products {
  &__is-loading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 300px);
  }
}
</style>
