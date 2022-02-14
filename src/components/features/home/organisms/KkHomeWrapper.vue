<template>
  <div class="dcb-wrapper">
    <button class="tw-btn tw-btn-primary" @click="addCard">Add Card</button>
    <div class="tw-flex tw-flex-wrap tw--m-4">
      <template v-for="card in cards">
        <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4" :key="card.title">
          <kk-image-card
            :title="card.title"
            :link="card.link"
            :image-url="card.imageUrl"
          ></kk-image-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import KkImageCard from '@/components/molecules/KkImageCard'

export default {
  name: 'KkHomeWrapper',

  components: {
    KkImageCard,
  },

  inject: {
    cards: {
      from: 'cards',
      default: () => [],
    },
    addCard: {
      from: 'addCard',
      default: () => () => {},
    },
  },
}
</script>
