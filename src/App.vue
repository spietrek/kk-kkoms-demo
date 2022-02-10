<template>
  <div id="app">
    <kk-shell>
      <router-view />
    </kk-shell>
  </div>
</template>

<script>
import KkShell from '@/views/shell/KkShell'

export default {
  components: {
    KkShell,
  },
}
</script>
