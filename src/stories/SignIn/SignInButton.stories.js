// src/stories/SignIn/Button.stories.js
import Button from '../../components/SignIn/SignInButton.vue'

export default {
  title: 'SignIn/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] }
    }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />'
})

export const SignIn = Template.bind({})
SignIn.args = {
  label: 'Sign In',
  type: 'submit'
}
