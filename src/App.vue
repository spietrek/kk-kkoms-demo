<template>
  <div id="app">
    <kk-shell-container>
      <router-view />
    </kk-shell-container>
  </div>
</template>

<script>
import KkShellContainer from '@/components/features/shell/containers/KkShellContainer'

export default {
  components: {
    KkShellContainer,
  },
}
</script>
