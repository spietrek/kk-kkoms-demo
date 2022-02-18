<template>
  <div class="home">
    <kk-home-template />
  </div>
</template>

<script>
import KkHomeTemplate from '@/components/features/home/templates/KkHomeTemplate'

export default {
  name: 'KkHomePage',

  components: {
    KkHomeTemplate,
  },

  data() {
    return {
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
