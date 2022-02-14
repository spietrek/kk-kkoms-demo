<template>
  <section class="tw-text-gray-600 tw-body-font">
    <div class="tw-container tw-p4 lg:tw-p-10 tw-mx-auto">
      <div class="tw-flex tw-flex-wrap tw-w-full tw-mb-20">
        <kk-underline-header
          :title="pageProperties.pageTitle"
        ></kk-underline-header>

        <p class="lg:tw-w-1/2 tw-w-full tw-leading-relaxed tw-text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them running deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>

      <kk-home-wrapper></kk-home-wrapper>
    </div>
  </section>
</template>

<script>
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader'
import KkHomeWrapper from '@/components/features/home/organisms/KkHomeWrapper'

export default {
  name: 'KkHomeTemplate',

  components: {
    KkHomeWrapper,
    KkUnderlineHeader,
  },

  inject: ['pageProperties'],
}
</script>
