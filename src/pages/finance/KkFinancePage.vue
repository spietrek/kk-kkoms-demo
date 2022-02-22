<template>
  <KkPageWrapper title="Finance">
    <div class="tw-mt-16">
      <span>Count is: {{ currentCount }}</span>
    </div>
    <button
      class="tw-btn tw-btn-primary tw-btn-sm"
      :disabled="isLoading"
      @click="incrementCount"
    >
      +1
    </button>
    <button
      class="tw-btn tw-btn-primary tw-btn-sm tw-mx-2"
      :disabled="isLoading"
      @click="decrementCount"
    >
      -1
    </button>
    <button
      class="tw-btn tw-btn-primary tw-btn-sm"
      :disabled="isLoading"
      @click="resetCount"
    >
      Reset
    </button>
  </KkPageWrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'

export default {
  name: 'KkFinancePage',

  components: {
    KkPageWrapper,
  },

  computed: {
    ...mapGetters('finance', ['currentCount', 'isLoading']),
  },

  methods: {
    ...mapActions('finance', [
      'incrementAsync',
      'decrementAsync',
      'resetAsync',
    ]),

    incrementCount() {
      this.incrementAsync()
    },

    decrementCount() {
      this.decrementAsync()
    },

    resetCount() {
      this.resetAsync()
    },
  },
}
</script>
