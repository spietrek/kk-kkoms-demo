<template>
  <div id="app">
    <kk-shell-wrapper>
      <router-view />
    </kk-shell-wrapper>
  </div>
</template>

<script>
import KkShellWrapper from '@/components/organisms/KkShellWrapper.vue'

export default {
  components: {
    KkShellWrapper,
  },
}
</script>
