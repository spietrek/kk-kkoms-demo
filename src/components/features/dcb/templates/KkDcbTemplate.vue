<template>
  <div class="dcb-template">
    <kk-dcb-wrapper></kk-dcb-wrapper>
  </div>
</template>

<script>
import KkDcbWrapper from '@/components/features/dcb/organisms/KkDcbWrapper.vue'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'KkDcbTemplate',

  components: {
    KkDcbWrapper,
  },

  // setup(props) {},
})
</script>
