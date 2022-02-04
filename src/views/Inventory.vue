<template>
  <div class="tw-p4 lg:tw-p-10">
    <h1>This is the ABOUT page</h1>
    <div class="tw-mt-16">
      <span>Count is: {{ state.count }}</span>
    </div>
    <button class="tw-btn tw-btn-primary tw-btn-sm" @click="increaseCount">
      Increase Count
    </button>
    <div class="tw-mt-16">New To Do Entered: {{ input }}</div>
    <div>
      <input
        placeholder="Add TODO"
        class="tw-input tw-input-bordered tw-input-sm"
        v-model="input"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from '@vue/composition-api'

export default defineComponent({
  setup(props, context) {
    const input = ref('')
    const state = ref({
      count: props.initCount,
    })

    const increaseCount = () => {
      state.value.count++
    }

    watchEffect(() => {
      console.log('current count', state.value)
    })

    return {
      state,
      input,
      increaseCount,
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
