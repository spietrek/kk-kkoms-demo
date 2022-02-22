<template>
  <div>
    <div class="tw-flex tw-flex-wrap tw-w-full tw-p4 lg:tw-p-10">
      <KkUnderlineHeader :title="title"></KkUnderlineHeader>

      <p class="lg:tw-w-1/2 tw-w-full tw-leading-relaxed tw-text-gray-500">
        {{ summary }}
      </p>
    </div>

    <div class="tw-px4 lg:tw-px-10">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader.vue'

export default {
  name: 'KKPageWrapper',

  components: { KkUnderlineHeader },

  props: {
    title: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
  },
}
</script>
