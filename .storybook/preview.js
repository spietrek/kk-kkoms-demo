import '@/main.css'
import StoryRouter from 'storybook-vue-router'
import { addDecorator } from '@storybook/vue'

addDecorator(StoryRouter())

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
