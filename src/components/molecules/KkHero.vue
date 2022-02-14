<template>
  <div class="tw-hero tw-min-h-screen tw-bg-base-300">
    <div class="tw-text-center tw-hero-content">
      <div class="tw-max-w-sm">
        <h1 class="tw-mb-5 tw-text-5xl tw-font-bold">{{ heroTitle }}</h1>
        <p class="tw-mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="tw-btn tw-btn-primary" @click="handleUpdateDate">
          Update Date
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  name: 'KkHero',

  setup() {
    const heroTitle = inject('heroTitle', 'N/A')
    const updateDate = inject('updateDate')

    if (updateDate === undefined) {
      throw new Error('Failed to inject "updateDate"')
    }

    const handleUpdateDate = () => {
      updateDate()
    }

    return {
      heroTitle,
      handleUpdateDate,
    }
  },
})
</script>
