<template>
  <section class="tw-text-gray-600 tw-body-font">
    <div class="tw-container tw-p4 lg:tw-p-10 tw-mx-auto">
      <div class="tw-flex tw-flex-wrap tw-w-full tw-mb-20">
        <kk-underline-header title="KKOMS"></kk-underline-header>

        <p class="lg:tw-w-1/2 tw-w-full tw-leading-relaxed tw-text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them running deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
      <div class="tw-flex tw-flex-wrap tw--m-4">
        <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4">
          <kk-image-card
            title="DCB"
            link="/dcb"
            image-url="https://dummyimage.com/228x160"
          ></kk-image-card>
        </div>
        <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4">
          <kk-image-card
            title="Inventory"
            link="/inventory"
            image-url="https://dummyimage.com/228x160"
          ></kk-image-card>
        </div>
        <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4">
          <kk-image-card
            title="Advanced Orders"
            link="/advanced-orders"
            image-url="https://dummyimage.com/228x160"
          ></kk-image-card>
        </div>
        <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4">
          <kk-image-card
            title="HR Bridge"
            link="/hr-bridge"
            image-url="https://dummyimage.com/228x160"
          ></kk-image-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KkImageCard from '@/components/molecules/KkImageCard'
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader.vue'

export default {
  name: 'KkHomeTemplate',

  components: {
    KkImageCard,
    KkUnderlineHeader,
  },
}
</script>
