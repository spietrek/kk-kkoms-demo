<template>
  <KkPageWrapper title="Advanced Orders">
    <div class="tw-mt-16">
      <span>Count is: {{ state.count }}</span>
    </div>
    <button class="tw-btn tw-btn-primary tw-btn-sm" @click="increaseCount">
      Increase Count
    </button>
    <button class="tw-btn tw-btn-primary tw-btn-sm" @click="decreaseCount">
      Decrease Count
    </button>
    <div class="tw-mt-16">New To Do Entered: {{ input }}</div>
    <div>
      <input
        placeholder="Add TODO"
        class="tw-input tw-input-bordered tw-input-sm"
        v-model="input"
      />
    </div>
  </KkPageWrapper>
</template>

<script>
import KkPageWrapper from '@/components/organisms/KkPageWrapper'
import { defineComponent, ref, watchEffect } from '@vue/composition-api'

export default defineComponent({
  name: 'KkAdvancedOrdersPage',

  components: {
    KkPageWrapper,
  },

  setup(props) {
    const input = ref('')
    const state = ref({
      count: props.initCount,
    })

    const increaseCount = () => {
      state.value.count++
    }

    const decreaseCount = () => {
      state.value.count--
    }

    watchEffect(() => {
      console.log('current count', state.value)
    })

    return {
      state,
      input,
      increaseCount,
      decreaseCount,
    }
  },

  props: {
    initCount: {
      type: Number,
      default: 0,
    },
  },
})
</script>
