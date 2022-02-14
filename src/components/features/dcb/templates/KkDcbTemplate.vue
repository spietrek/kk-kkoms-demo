<template>
  <div class="dcb-template">
    <kk-underline-header title="DCB"></kk-underline-header>
    <kk-dcb-wrapper></kk-dcb-wrapper>
  </div>
</template>

<script>
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader'
import KkDcbWrapper from '@/components/features/dcb/organisms/KkDcbWrapper'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'KkDcbTemplate',

  components: {
    KkUnderlineHeader,
    KkDcbWrapper,
  },

  // setup(props) {},
})
</script>
