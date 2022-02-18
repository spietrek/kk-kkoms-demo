import StoryRouter from 'storybook-vue-router'
import KkImageCard from './KkImageCard'
import { routesData } from '@/stories/data/routes'

export default {
  title: 'Common/Molecules/KkImageCard',
  component: KkImageCard,
  parameters: {},
  decorators: [
    StoryRouter(
      {},
      {
        routes: routesData,
        initialEntry: '/',
      },
    ),
  ],
}

export const basic = () => ({
  components: { KkImageCard },
  data() {
    return {
      card: {
        title: 'DCB',
        link: '/dcb',
        imageUrl: 'https://dummyimage.com/228x160',
      },
    }
  },
  template: `
    <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4" :key="card.title">
      <kk-image-card
        :title="card.title"
        :link="card.link"
        :image-url="card.imageUrl"
      ></kk-image-card>
    </div>`,
})

export const multiple = () => ({
  components: { KkImageCard },
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
      ],
    }
  },
  template: `
    <div class="tw-container tw-p4 lg:tw-p-10 tw-mx-auto">
      <div class="tw-flex tw-flex-wrap tw--m-4">
        <template v-for="card in cards">
          <div class="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4" :key="card.title">
            <kk-image-card
              :title="card.title"
              :link="card.link"
              :image-url="card.imageUrl"
            ></kk-image-card>
          </div>
        </template>
      </div>
    </div>`,
})
