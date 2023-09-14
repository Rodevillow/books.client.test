<template>
  <div class="product" v-if="!isLoading">
    <UiH3 class="product__title">{{ book.title }}</UiH3>
    <UiPrice class="product__price">Price: {{ book.price }}$</UiPrice>

    <div class="product__info">
      <UiSmallText>Author: {{ book.author }}</UiSmallText>
      <UiSmallText>ISBN: {{ book.isbn }}</UiSmallText>
      <UiSmallText>Available stock: {{ book.availableStock }}</UiSmallText>
    </div>

    <UiButtonDefault
        class="product__button"
        @click="handleTryToBuy"
    >
      Try to buy
    </UiButtonDefault>
  </div>

  <div class="product__is-loading" v-if="isLoading">
    <UiSpinner />
  </div>
</template>

<script lang="ts" setup>
import UiH3 from "@/components/UiH3.vue"
import UiPrice from "@/components/UiPrice.vue"
import UiSpinner from "@/components/UiSpinner.vue"
import UiSmallText from "@/components/UiSmallText.vue"

import useApi from "@/utils/api"
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import UiButtonDefault from "@/components/UiButtonDefault.vue";

const api = useApi()
const route = useRoute()

const book = ref({})
const isLoading = ref(false)

const handleTryToBuy = () => { console.log('handleTryToBuy'); }

onMounted(async () => {
  try {
    isLoading.value = true
    const response = await api.get(`books/${route.params.id}`)
    book.value = response.data?.book
  } catch ({message}) {
    console.error(message)
  } finally {
    isLoading.value = false
  }
})

</script>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";

.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);

  &__is-loading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 300px);
  }

  &__title {
    margin-bottom: 10px;
  }

  &__price {
    margin-bottom: 20px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid $background-color;
    border-radius: $default-border-radius;
  }

  &__button {
    margin-top: 40px;
  }
}
</style>
