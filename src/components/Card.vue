<template>
  <div class="card">
    <router-link :to="{ name: 'product', params: { id: props.id } }">
      <UiH3 class="card__title">{{ props.title }}</UiH3>
      <div class="card__bottom">
        <UiSmallText class="card__author">{{ props.author }}</UiSmallText>
        <UiPrice class="card__price">{{ props.price }}$</UiPrice>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import UiH3 from "@/components/UiH3.vue"
import UiPrice from "@/components/UiPrice.vue"
import UiSmallText from "@/components/UiSmallText.vue"

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ""
  },
  author: {
    type: String,
    default: ""
  },
  price: {
    type: String,
    default: ""
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_varibales.scss";

.card {
  position: relative;
  padding: 20px;
  border-radius: $default-border-radius;
  border: 1px solid $background-color;
  display: flex;
  flex-direction: column;
  transition: .1s;

  &:hover {
    border: 1px solid $text-color;
    transition: .1s;
  }

  a {
    text-decoration: none;
    color: $text-color;

    &:hover {
      color: $background-color;
    }
  }

  &__title {
    margin-bottom: 20px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__author {
      text-align: right;
      color: $text-author-color
    }

    &__price {
      color: $text-price-color;
    }
  }
}
</style>