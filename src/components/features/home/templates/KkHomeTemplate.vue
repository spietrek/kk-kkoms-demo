<template>
  <section class="tw-text-gray-600 tw-body-font">
    <div class="tw-container tw-p4 lg:tw-p-10 tw-mx-auto">
      <KkHomeWrapper></KkHomeWrapper>
    </div>
  </section>
</template>

<script>
import KkHomeWrapper from '@/components/features/home/organisms/KkHomeWrapper.vue'

export default {
  name: 'KkHomeTemplate',

  components: {
    KkHomeWrapper,
  },
}
</script>
