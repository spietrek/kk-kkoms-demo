<template>
  <div id="app">
    <kk-shell>
      <router-view />
    </kk-shell>
  </div>
</template>

<script>
import KkShell from '@/components/features/shell/containers/KkShell'

export default {
  components: {
    KkShell,
  },
}
</script>
