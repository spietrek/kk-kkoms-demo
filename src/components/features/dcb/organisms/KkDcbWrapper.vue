<template>
  <div class="dcb-wrapper">
    <kk-hero></kk-hero>
  </div>
</template>

<script>
import KkHero from '@/components/molecules/KkHero'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'KkDcbWrapper',

  components: {
    KkHero,
  },

  // setup(props) {},
})
</script>
