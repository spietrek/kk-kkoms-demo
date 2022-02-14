<template>
  <div class="tw-p4 lg:tw-p-10">
    <kk-dcb-template></kk-dcb-template>
  </div>
</template>

<script>
import KkDcbTemplate from '@/components/features/dcb/templates/KkDcbTemplate'

import { defineComponent, provide, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'KkDcbView',

  components: {
    KkDcbTemplate,
  },

  setup() {
    const heroTitle = ref(new Date().toLocaleString())

    const updateDate = () => {
      heroTitle.value = new Date().toLocaleString()
    }

    provide('heroTitle', heroTitle)
    provide('updateDate', updateDate)
  },
})
</script>
