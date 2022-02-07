<template>
  <div class="tw-bg-gray-100 tw-p-6 tw-rounded-lg">
    <img
      class="
        tw-h-40 tw-rounded tw-w-full tw-object-cover tw-object-center tw-mb-6
      "
      :src="imageUrl"
      alt="content"
    />
    <h3
      class="
        tw-tracking-widest
        tw-text-indigo-500
        tw-text-xs
        tw-font-medium
        tw-title-font
      "
    >
      SUBTITLE
    </h3>
    <h2
      class="tw-text-lg tw-text-gray-900 tw-font-medium tw-title-font tw-mb-4"
    >
      {{ title }}
    </h2>
    <p class="tw-leading-relaxed tw-text-base">
      Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
      disrupt edison bulbche.
    </p>
    <router-link
      class="tw-btn tw-btn-primary rounded-btn tw-mt-4 tw-w-full"
      :to="link"
    >
      View
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'kk-image-card',

  props: {
    title: {
      type: String,
      default: 'N/A',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>
