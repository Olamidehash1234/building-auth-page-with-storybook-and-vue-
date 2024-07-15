// src/stories/SignIn/Logo.stories.js
import Logo from '../../components/ForgotPasswordConfirmation/Logo.vue'

export default {
  title: 'ForgotPasswordConfirmation/Logo',
  component: Logo
}

const Template = (args) => ({
  components: { Logo },
  setup() {
    return { args }
  },
  template: '<Logo v-bind="args" />'
})

export const Default = Template.bind({})
