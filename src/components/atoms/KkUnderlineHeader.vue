<template>
  <div class="lg:tw-w-1/2 tw-w-full tw-mb-6">
    <h1
      class="
        sm:tw-text-3xl
        tw-text-2xl tw-font-medium tw-title-font tw-mb-2 tw-text-gray-900
      "
    >
      {{ title }}
    </h1>

    <div class="tw-h-1 tw-w-20 tw-bg-indigo-500 tw-rounded"></div>
  </div>
</template>

<script>
export default {
  name: 'kk-underline-header',

  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
