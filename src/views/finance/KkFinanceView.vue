<template>
  <div class="tw-p4 lg:tw-p-10">
    <kk-underline-header title="Advanced Orders"></kk-underline-header>
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader'

export default {
  name: 'KkFinanceView',

  components: {
    KkUnderlineHeader,
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
