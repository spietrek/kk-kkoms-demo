<template>
  <div class="home">
    <img class="tw-block tw-mx-auto" alt="Vue logo" src="@/assets/logo.png" />
    <kk-home-template msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import KkHomeTemplate from '@/components/features/home/templates/KkHomeTemplate'

export default {
  name: 'kk-home',

  components: {
    KkHomeTemplate,
  },
}
</script>
