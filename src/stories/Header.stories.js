import MyHeader from './Header.vue'

export default {
  title: 'Example/Header',
  component: MyHeader,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template:
    '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
}
