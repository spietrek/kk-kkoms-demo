<template>
  <KkPageWrapper title="DCB">
    <kk-dcb-template></kk-dcb-template>
  </KkPageWrapper>
</template>

<script>
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'
import KkDcbTemplate from '@/components/features/dcb/templates/KkDcbTemplate.vue'

import { defineComponent, provide, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'KkDcbPage',

  components: {
    KkPageWrapper,
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
