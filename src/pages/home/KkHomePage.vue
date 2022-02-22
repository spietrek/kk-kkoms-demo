<template>
  <KkPageWrapper title="KKOMS" :summary="summary">
    <kk-home-template />
  </KkPageWrapper>
</template>

<script>
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'
import KkHomeTemplate from '@/components/features/home/templates/KkHomeTemplate.vue'

export default {
  name: 'KkHomePage',

  components: {
    KkPageWrapper,
    KkHomeTemplate,
  },

  data() {
    return {
      summary: `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them running deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.`,
      cards: [
        {
          title: 'DCB',
          link: '/dcb',
          imageUrl: 'https://dummyimage.com/228x160',
        },
        {
          title: 'Inventory',
          link: '/inventory',
          imageUrl: 'https://dummyimage.com/228x160',
        },
        {
          title: 'Advanced Orders',
          link: '/advanced-orders',
          imageUrl: 'https://dummyimage.com/228x160',
        },
        {
          title: 'HR Bridge',
          link: '/hr-bridge',
          imageUrl: 'https://dummyimage.com/228x160',
        },
      ],
    }
  },

  provide() {
    return {
      cards: this.cards,
      addCard: this.handleAddCard,
      pageProperties: {
        pageName: 'Home',
        pageTitle: 'KKOMS',
      },
    }
  },

  methods: {
    handleAddCard() {
      this.cards.push({
        title: 'New Card',
        link: '/new-card',
        imageUrl: 'https://dummyimage.com/228x160',
      })
    },
  },
}
</script>
